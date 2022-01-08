import { Component, OnInit } from '@angular/core';
import {ChooseShowService} from "../../../services/chooseShow.service";

@Component({
  selector: 'app-choose-show',
  templateUrl: './choose-show.page.html',
  styleUrls: ['./choose-show.page.scss'],
})
export class ChooseShowPage implements OnInit {

  shows: Array<{}> = [];

  constructor(
      public chooseShowService : ChooseShowService,
  ) {}

  missions: Array<{}> = [];

  ngOnInit() {
    this.getAllShow();
  }

  getAllShow() {
    this.chooseShowService.getAllShow()
      .subscribe((shows: Array<{}>) => {
        this.shows = shows;
        this.shows.forEach((show: any = {}) => {
          console.log(show)
        })
    },
    error => {
      console.log('error', error)
    })
  }
}
