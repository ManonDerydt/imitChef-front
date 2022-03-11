import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../../services/show.service";
import {ActivatedRoute, Router} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {ChooseShowService} from "../../../services/chooseShow.service";
import {ReciepeService} from "../../../services/reciepe.service";
import type { Candidate } from "../../../../types/Candidate";
import {CandidateHasTvShow} from "../../../../types/candidateHasTvShow";
import {log} from "util";

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  show = {name: null};
  candidateOftheShow:Candidate = null;
  candidates: Array<Candidate> = [];
  candidatesHasTvShow: Array<CandidateHasTvShow> = [];
  reciepes: Array<{}> = [];


  constructor(
      public showService : ShowService,
      public chooseShowService : ChooseShowService,
      public reciepeService : ReciepeService,
      private route: ActivatedRoute,
      private router: Router

  ) {}

  ngOnInit() {
    this.route.params.subscribe(async parameter => {
        const showId = parameter.id
        this.getShow(showId)
        // console.log(this.reciepes)

    })
  }

    getShow(id: string) {
        this.chooseShowService.getShow(id)
            .subscribe((show: any) => {
                    this.show = show;
                    this.candidates = show.Candidates;
                    this.reciepes = show.Candidates.map(candidate =>
                        candidate.Reciepes
                    );
                    console.log(this.reciepes)
                    console.log(this.candidates)
                    // console.log(this.candidates)
                },
                error => {
                    console.log('error', error)
            })
    }

    getCandidatesByShow(showId:string):void{
        this.showService.getCandidateByShow(showId)
            .subscribe(
                (candidateOftheShow: Candidate) => {
                    this.candidateOftheShow = candidateOftheShow;
                },
                error => {
                    console.log('error', error)
                })
    }

    getAllCandidates() {
        this.showService.getAllCandidates()
        .subscribe(
            (candidates: Array<Candidate>) => {
                this.candidates = candidates;
            },
            error => {
                console.log('error', error)
            })
    }

    openReciepeById($reciepe: any = {}) {
        this.router.navigate(['home/reciepe/', $reciepe.id]);
    }

    openReciepeOfCandidatesById($candidate: any = {}) {
        this.router.navigate(['home/reciepe/candidate', $candidate.id]);
    }

}
