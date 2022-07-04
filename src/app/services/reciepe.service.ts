import {Injectable} from '@angular/core';
import {ApiService} from './api.service';


@Injectable({
    providedIn: 'root'
})

export class ReciepeService {

    constructor(private api: ApiService) {}

    getReciepes(reciepeId: string) {
        return this.api.get(`/reciepe/` + reciepeId);
    }

}