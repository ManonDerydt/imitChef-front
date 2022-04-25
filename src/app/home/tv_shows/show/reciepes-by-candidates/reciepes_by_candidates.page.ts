import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ShowService} from "../../../../services/show.service";
import {Candidate} from "../../../../models/candidate";

@Component({
  selector: 'app-reciepes-by-candidates',
  templateUrl: './reciepes_by_candidates.page.html',
  styleUrls: ['./reciepes_by_candidates.page.scss'],
})
export class Reciepes_by_candidatesPage implements OnInit {
  candidate : Candidate = null;

  constructor(
      private router: Router,
      public showService : ShowService,
      private route: ActivatedRoute,

  ) { }

  ngOnInit() {
      this.getCandidateOnClick()
      this.route.params.subscribe(async parameter => {
          const candidateId = Number(parameter.id)
          console.log(candidateId)
      })
  }

    getCandidateOnClick() {
        this.route.params.subscribe(async parameter => {
        const candidateId = Number(parameter.id)
        this.showService.getCandidateOnClick()
            .subscribe(
                (candidates: Array<Candidate>) => {
                    this.candidate = candidates.find(candidate =>
                        candidate.id === candidateId
                    );
                },
                error => {
                    console.log('error', error)
                })
        })

    }
}
