import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "./services/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public router:Router,
    private storageService: StorageService
  ) {
    this.initializeApp();
  }

   initializeApp(){
    this.router.navigateByUrl('splash');
  }
}
