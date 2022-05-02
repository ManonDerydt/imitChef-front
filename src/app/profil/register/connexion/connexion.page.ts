import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../../services/user.service";
import {StorageService} from "../../../services/storage.service";


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  submitted = false;
  user: any;
  loginForm : FormGroup;
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
      private userService: UserService,
      private storageService: StorageService,
      private router: Router
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  login(){

    this.submitted = true;

    if(this.loginForm.valid){
      const {email, password} = this.loginForm.value;
      return this.userService.loginUser(password, email).subscribe(
          async (res: any) => {
            const {user, token} = res;
            await this.storageService.set("token", token);
            await this.storageService.set("user", user);
            this.router.navigate(['/home/account']);
          },
          error => {
            console.log(error)
          }
      );
    }

  }
}
