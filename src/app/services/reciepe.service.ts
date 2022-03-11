import {Injectable} from '@angular/core';
import {ApiService} from './api.service';


@Injectable({
    providedIn: 'root'
})

export class ReciepeService {

    constructor(private api: ApiService) {}

    // Etape 4 : Fonction get vers le back
    getReciepeById(id: string) {
        return this.api.get(`/reciepe/${id}`);
    }

    getReciepes() {
        return this.api.get(`/reciepe`);
    }


}