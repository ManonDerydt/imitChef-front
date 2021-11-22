import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  submitted = false;
  user: any;
  formContact : FormGroup;
  version: string;


  constructor(
      private route: ActivatedRoute,
      private form: FormBuilder,
  ) {
    // this.formContact = {};
  }

  create(formContact){
    alert(this.formContact)
    console.log('formContact =',  formContact );
  }

  async next(){
    // this.formContact.emit();
  }

  ngOnInit() {
    this.formContact = this.form.group({
      civility: ['F', [Validators.required]],
      lastname: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      adeli: ['', [Validators.required, Validators.pattern(/^[0-9]{9,11}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^0[6-7][0-9]{8}$/)]]
      //origin: ['', [Validators.required]]
    });
    alert(this.formContact)
    this.route.queryParams.subscribe(params => {
      this.user = params;
    });

    this.formContact = this.form.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
      confirm_password: ['', [Validators.required]],
      check: false
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
        alert("Le formulaire est correct")
      }
   }

}

