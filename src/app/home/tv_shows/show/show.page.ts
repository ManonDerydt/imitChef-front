import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../../services/show.service";
import {ActivatedRoute, Router} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {ChooseShowService} from "../../../services/chooseShow.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  show = {
      name: null
  };

  constructor(
      public showService : ShowService,
      public chooseShowService : ChooseShowService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parameter => {
        this.getShow(parameter.id)
    })
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
}
