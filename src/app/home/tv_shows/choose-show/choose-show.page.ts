import { Component, OnInit } from '@angular/core';
import { ChooseShowService } from "../../../services/chooseShow.service";
import { Router } from '@angular/router';
import {Deal} from "../../../models/deal";
import {Candidate} from "../../../models/candidate";
import {Reciepe} from "../../../models/reciepe";

@Component({
  selector: 'app-choose-show',
  templateUrl: './choose-show.page.html',
  styleUrls: ['./choose-show.page.scss'],
})
export class ChooseShowPage implements OnInit {

  shows: Array<{}> = [];
  deals: Array<Deal> = [];

  constructor(
    public chooseShowService: ChooseShowService,
    private router: Router,
  ) { }

  ngOnInit() {
    //this.getAllShow();
    this.getAllDeals();
  }

  // getAllShow() {
  //   this.chooseShowService.getAllShow()
  //     .subscribe((shows: Array<{}>) => {
  //           console.log(shows)
  //         this.shows = shows;
  //       },
  //       error => {
  //         console.log('error', error)
  //       })
  // }

  getAllDeals() {
      this.chooseShowService.getAllDeals()
          .subscribe((deals: Array<Deal>) => {
              this.deals = deals;
          });
  }

  openDealById($deal: any = {}) {
    console.log($deal.id)
    this.router.navigate(['home/deals', $deal.id]);
  }
}
