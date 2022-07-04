import {Injectable} from '@angular/core';
import {ApiService} from './api.service';


@Injectable({
    providedIn: 'root'
})

export class RestaurantService {
    constructor(private api: ApiService) {}

    getRestaurant(id: string){
        return this.api.get(`/restaurant/${id}`);
    }
}