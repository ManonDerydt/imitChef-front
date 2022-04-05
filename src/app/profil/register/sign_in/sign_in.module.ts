import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {SignInRoutingModule} from "../sign_in.routing.module";
import {Sign_inPage} from "./sign_in.page";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignInRoutingModule,
        ReactiveFormsModule,

    ],
    declarations: [
        Sign_inPage
    ]
})
export class SignInModule {}