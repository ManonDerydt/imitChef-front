import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate';
import {ApiService} from './api.service';


@Injectable({
    providedIn: 'root'
})

export class CandidatesService {

    constructor(private api: ApiService) {}

    getCandidateById(id: string): Observable<any> {
        return this.api.get(`/candidates/${id}`);
    }
    I
}
