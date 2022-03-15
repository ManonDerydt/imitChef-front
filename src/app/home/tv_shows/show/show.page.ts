import { Component, OnInit } from '@angular/core';
import { ShowService } from "../../../services/show.service";
import { ActivatedRoute, Router } from '@angular/router';

import { ChooseShowService } from "../../../services/chooseShow.service";
import { ReciepeService } from "../../../services/reciepe.service";
import { Candidate } from 'src/app/models/candidate';

@Component({
    selector: 'app-show',
    templateUrl: './show.page.html',
    styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
    show = { name: null };
    candidateOftheShow: Candidate = null;
    candidates: Array<Candidate> = [];
    reciepes: Array<{}> = [];


    constructor(
        public showService: ShowService,
        public chooseShowService: ChooseShowService,
        public reciepeService: ReciepeService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.params.subscribe(async parameter => {
            const showId = parameter.id;
            this.getShow(showId);
        });
    }

    getShow(id: string) {
        this.chooseShowService.getShow(id)
            .subscribe((show: any) => {
                this.show = show;
                this.candidates = show.Candidates;
                this.reciepes = show.Candidates.map(candidate =>
                    candidate.Reciepes
                );

            },
                error => {
                    console.log('error', error)
                });
    }


    openReciepeById($reciepe: any = {}) {
        this.router.navigate(['home/reciepe/', $reciepe.id]);
    }

    openReciepeOfCandidatesById($candidate: any = {}) {
        this.router.navigate(['home/candidates', $candidate.id]);
    }
}

