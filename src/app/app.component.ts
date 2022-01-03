import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public router:Router,
    private http: HttpClient,
  ) {
    this.initializeApp();
  }

  initializeApp(){
    this.router.navigateByUrl('splash');
  }
}
