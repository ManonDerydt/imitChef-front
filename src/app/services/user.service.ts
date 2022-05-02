import {Injectable} from '@angular/core';
import {ApiService} from './api.service';


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
}
