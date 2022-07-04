import {Injectable} from '@angular/core';
import {ApiService} from './api.service';


@Injectable({
    providedIn: 'root'
})

export class OrderService {

    constructor(private api: ApiService) {}

    getOrderById(orderId: string){
        return this.api.get(`/order/` + orderId);

    }


}