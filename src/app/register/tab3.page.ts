import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})

export class Tab3Page implements OnInit {

  submitted = false;
  user: any;
  formContact : FormGroup;
  version: string;


  constructor(
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private httpClient: HttpClient,
      private userService: UserService,

  ) {}

    ngOnInit() {
      this.formContact = this.formBuilder.group({
        lastname: ['', [Validators.required]],
        firstname: ['', [Validators.required]],
        password: ['', [Validators.required]],
        email: ['', [Validators.required]]
      });
    }

    get f() {
      return this.formContact.controls;
    }

  register(){

    this.submitted = true;

    if(this.formContact.invalid){
      alert("Le formulaire n'est pas correct");
      return;
    }else{
      console.log(this.formContact.value)
      let user = this.formContact.value;
      return this.userService.createUser(user).subscribe(user);
    }
  }

}

