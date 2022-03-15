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

    getCandidateByShow(showId) {
        return this.api.get(`/candidateByShow/${showId}`);
    }

    // getCandidates() {
    //     return this.api.get(`/candidates`);
    // }

    // getCandidateOnClick(candidateId) {
    //     return this.api.get(`/candidates/` + candidateId);
    // }

    // getCandidateOnClick(candidateId: string) {
    //     return this.api.get(`/candidates/${candidateId}`);
    // }

    getCandidateOnClick() {
        return this.api.get(`/candidatesOnclick`);
    }
}
