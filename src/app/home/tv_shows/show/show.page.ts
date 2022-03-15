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
import {Reciepe} from "../../../../types/Reciepe";

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
  candidate : Reciepe = null;


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
        // this.getCandidateOnClick(candidateId)

    })
      // const candidateId = parameter.id
      // this.getCandidateOnClick(candidateId)
  }

    getShow(id: string) {
        this.chooseShowService.getShow(id)
            .subscribe((show: any) => {
                    this.show = show;
                    this.candidates = show.Candidates;
                    this.reciepes = show.Candidates.map(candidate =>
                        candidate.Reciepes
                    );
                    console.log(this.candidates)
                },
                error => {
                    console.log('error', error)
            })
    }

    // getCandidatesByShow(showId:string):void{
    //     this.showService.getCandidateByShow(showId)
    //         .subscribe(
    //             (candidateOftheShow: Candidate) => {
    //                 this.candidateOftheShow = candidateOftheShow;
    //             },
    //             error => {
    //                 console.log('error', error)
    //             })
    // }

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

    // getReciepeById() {
    //     this.route.params.subscribe(async parameter => {
    //         const candidateId = Number(parameter.id)
    //         this.showService.getCandidates()
    //             .subscribe(
    //                 (candidates: Array<Reciepe>) => {
    //                     this.candidate = candidates.find(candidate => candidate.id === candidateId);
    //                 },
    //                 error => {
    //                     console.log('error', error)
    //                 })
    //     })
    // }

    // getCandidateOnClick(id: string) {
    //     this.showService.getCandidateOnClick(id)
    //         .subscribe((candidate: any) => {
    //                 this.candidate = candidate;
    //                 // this.candidates = show.Candidates;
    //                 // this.reciepes = show.Candidates.map(candidate =>
    //                 //     candidate.Reciepes
    //                 // );
    //             },
    //             error => {
    //                 console.log('error', error)
    //             })
    // }

    openReciepeById($reciepe: any = {}) {
        this.router.navigate(['home/reciepe/', $reciepe.id]);
    }

    openReciepeOfCandidatesById($candidate: any = {}) {
        this.router.navigate(['home/reciepe/candidate', $candidate.id]);
    }
}

