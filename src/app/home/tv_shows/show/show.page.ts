import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../../services/show.service";
import {ActivatedRoute, Router} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {ChooseShowService} from "../../../services/chooseShow.service";
import {ReciepeService} from "../../../services/reciepe.service";
import type { Candidate } from "../../../../types/Candidate";
import {CandidateHasTvShow} from "../../../../types/candidateHasTvShow";

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
        // this.getAllCandidates();
        this.getReciepes();
        // this.openCandidateByShow();
        // this.getCandidatesByShow(showId);
        // console.log(this.candidates)
        // console.log(this.candidatesHasTvShow)
    })
  }

    getShow(id: string) {
        this.chooseShowService.getShow(id)
            .subscribe((show: any) => {
                    this.show = show;
                    this.candidates = show.Candidates;
                    console.log(show)
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

    getReciepes() {
        this.reciepeService.getReciepes()
            .subscribe(
                (reciepes: Array<{}>) => {
                    this.reciepes = reciepes;
                },
                error => {
                    console.log('error', error)
                })
    }

    getReciepe(id: string) {
        this.reciepeService.getReciepeById(id)
            .subscribe((reciepe: any) => {
                    this.reciepes = reciepe;
                },
                error => {
                    console.log('error', error)
                })
    }

    // openCandidateByShow() {
    //     this.showService.openCandidateByShow()
    //         .subscribe(
    //             (candidatesHasTvShow: Array<CandidateHasTvShow>) => {
    //                 this.candidatesHasTvShow = candidatesHasTvShow;
    //             },
    //             error => {
    //                 console.log('error', error)
    //             })
    // }

    openReciepeById($reciepe: any = {}) {
        this.router.navigate(['home/reciepe/', $reciepe.id]);
    }

}
