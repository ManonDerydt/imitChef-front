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
}
