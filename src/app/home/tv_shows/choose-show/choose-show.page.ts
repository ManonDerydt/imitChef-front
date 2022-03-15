import { Component, OnInit } from '@angular/core';
import { ChooseShowService } from "../../../services/chooseShow.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-show',
  templateUrl: './choose-show.page.html',
  styleUrls: ['./choose-show.page.scss'],
})
export class ChooseShowPage implements OnInit {

  shows: Array<{}> = [];

  constructor(
    public chooseShowService: ChooseShowService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllShow();
  }

  getAllShow() {
    this.chooseShowService.getAllShow()
      .subscribe(
        (shows: Array<{}>) => {
          this.shows = shows;
        },
        error => {
          console.log('error', error)
        })
  }

  openShowById($show: any = {}) {
    this.router.navigate(['home/shows', $show.id]);
  }
}
