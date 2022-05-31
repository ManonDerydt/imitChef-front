import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private api: ApiService) {}

    createUser(user) {
        return this.api.post('/users', user);
    }

    loginUser(password: string, email: string) {
        return this.api.post("/users/login", {password, email});
    }

    // getUser(){
    //     return this.api.get(`/users/account`);
    // }

    getReciepesByUser() {
        return this.api.get(`/users/reciepes`);
    }

    getUser(){
        return this.api.get(`/users`);
    }

}
