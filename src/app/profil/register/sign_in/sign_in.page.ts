import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../services/user.service";
import {log} from "util";


@Component({
  selector: 'app-sign_in',
  templateUrl: 'sign_in.page.html',
  styleUrls: ['sign_in.page.scss'],
})

export class Sign_inPage implements OnInit {

  submitted = false;
  user: any;
  formContact : FormGroup;
  version: string;


  constructor(
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private httpClient: HttpClient,
      private userService: UserService,
      private router: Router

  ) {}

    ngOnInit() {
      this.formContact = this.formBuilder.group({
        lastname: ['', [Validators.required]],
        firstname: ['', [Validators.required]],
        password: ['', [Validators.required,
          // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/)]
          ]],
        email: ['', [Validators.required, Validators.email]]
      });
    }

    get f() {
      return this.formContact.controls;
    }

  register(){
    this.submitted = true;
    if(this.formContact.valid){
      let user = this.formContact.value;
      return this.userService.createUser(user).subscribe(res=> {
        console.log(res)
        alert("Vos coordonnées ont bien été enregistrées !")
        this.router.navigate(['/home/account']);
      }, error => {
        console.error(error)
      });
    }

  }

}

