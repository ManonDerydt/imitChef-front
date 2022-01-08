import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(private http: HttpClient) {
    }

    private static updateUrl(req: string) {
        return environment.origin + req;
    }


    put(url: string, body: any) {
        url = ApiService.updateUrl(url);
        return this.http.put(url, body);
    }

    post(url: string, body: any) {
        url = ApiService.updateUrl(url);
        return this.http.post(url, body);
    }

    get(url: string) {
        url = ApiService.updateUrl(url);
        return this.http.get(url);
    }
}
