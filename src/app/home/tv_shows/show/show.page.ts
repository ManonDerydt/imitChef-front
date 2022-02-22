import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../../services/show.service";
import {ActivatedRoute, Router} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {ChooseShowService} from "../../../services/chooseShow.service";
import {ReciepeService} from "../../../services/reciepe.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  show = {name: null};
  candidatesOftheShow = {tv_show: null};
  candidates: Array<{}> = [];
  reciepes: Array<{}> = [];


  constructor(
      public showService : ShowService,
      public chooseShowService : ChooseShowService,
      public reciepeService : ReciepeService,
      private route: ActivatedRoute,
      private router: Router

  ) {}

  ngOnInit() {
    this.route.params.subscribe(parameter => {
        this.getShow(parameter.id)
    })
      this.getAllCandidates();
      this.getReciepes();
      this.getCandidateByShow();

      console.log(this.candidatesOftheShow)
      console.log(this.show)
  }

    getShow(id: string) {
        this.chooseShowService.getShow(id)
            .subscribe((show: any) => {
                    this.show = show;
                },
                error => {
                    console.log('error', error)
            })
    }

    getCandidateByShow(){
        this.showService.getCandidateByShow()
            .subscribe(
                (candidatesOftheShow: any) => {
                    this.candidatesOftheShow = candidatesOftheShow;
                    console.log(candidatesOftheShow)
                },
                error => {
                    console.log('error', error)
                })
    }

    getAllCandidates() {
        this.showService.getAllCandidates()
        .subscribe(
            (candidates: Array<{}>) => {
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

    openShowCandidateById(){
      alert("hello world")
    }

    openReciepeById($reciepe: any = {}) {
        this.router.navigate(['home/reciepe/', $reciepe.id]);

    }

}
