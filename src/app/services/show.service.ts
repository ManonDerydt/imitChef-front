import {Injectable} from '@angular/core';
import {ApiService} from './api.service';


@Injectable({
    providedIn: 'root'
})

export class ShowService {

    constructor(private api: ApiService) {}

    getAllShow(showId: any) {
        return this.api.get('/show' + showId);
    }

    getAllCandidates() {
        return this.api.get('/candidates');
    }
    // Etape 4 : Fonction get vers le back
    getCandidateByShow(showId) {
        return this.api.get(`/candidateByShow/${showId}`);
    }
}
