import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  submitted = false;
  user: any;
  formContact : FormGroup;
  version: string;
  auth: any[];
  dataUser = {
    email : "",
    password : ""
  }
  connected: boolean;

  constructor(
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private router: Router,

  ) {
    // this.afAuth.authState.subscribe(auth => {
    //   if (!auth) {
    //     console.log("Non connecté !")
    //     this.connected = false;
    //   }else {
    //     console.log("Connecté !")
    //     this.connected = true;
    //   }
    // })
  }

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

      // return this.userService.createUser(user).subscribe();
    }

  }
}
