import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent, HttpHeaders,
} from "@angular/common/http"
import {from, Observable} from "rxjs"
import {StorageService} from "./storage.service";
import {Injectable} from "@angular/core";
import {map, switchMap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {
    constructor(private storageService: StorageService) {
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return from(this.storageService.get('token')).pipe(
            switchMap(access_token => {
                const headers = new HttpHeaders({
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                });
                const cloneReq = req.clone({
                    headers
                });
                return next.handle(cloneReq)
            }),
        )
    }
}