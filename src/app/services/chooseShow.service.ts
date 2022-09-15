import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})

export class ChooseShowService {

    constructor(private api: ApiService) {}

    getAllShow() {
        return this.api.get('/show');
    }

    getAllDeals() {
        return this.api.get('/deals');
    }

    getShow(id: string) {
        return this.api.get(`/show/${id}`);
    }

    getDeal(id: string) {
        console.log("je passe bien par ici !")
        return this.api.get(`/deal/${id}`);
    }
    
}
