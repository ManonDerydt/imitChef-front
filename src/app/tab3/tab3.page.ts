import { Component, Output, EventEmitter, Input} from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  signInForm: FormGroup;


  constructor() {}

  get f() {
    return this.signInForm.controls;
  }


}

