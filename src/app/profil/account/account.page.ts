import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import { User } from '../../models/user';
import {Reciepe} from "../../models/reciepe";
import {Candidate} from "../../models/candidate";

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
    reciepes: Array<Reciepe> = [];
    users: Array<User> = [];

  constructor(
      private route: ActivatedRoute,
      private userService: UserService
  ) {
      this.route.params.subscribe(async parameter => {

      })
  }

  ngOnInit() {
      this.getReciepes();
      this.getUser();
  }

    getReciepes() {
      this.userService.getReciepesByUser().subscribe(reciepes => {
          console.log(reciepes)
      })
    }

    getUser(){
      this.userService.getUser().subscribe( (users: Array<User> = [])  => {
          this.users = users;
      })
    }
}
