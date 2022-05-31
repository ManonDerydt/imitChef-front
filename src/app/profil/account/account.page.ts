import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import { User } from '../../models/user';
import {Reciepe} from "../../models/reciepe";
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
    reciepes: Array<Reciepe> = [];
    user: User | object = {};

  constructor(
      private userService: UserService,
      private storageService: StorageService
  ) { }

  async ngOnInit() {
    this.user = await this.storageService.get("user");
    this.getReciepes();
  }

  getReciepes() {
    this.userService.getReciepesByUser()
    .subscribe((reciepes: Array<Reciepe>) => {
        this.reciepes = reciepes;
    });
  }
}
