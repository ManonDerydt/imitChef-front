import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MenuPageRoutingModule } from './menu-routing.module';

import {MenuPage } from './menu.page';
import {WelcomePage} from "../welcome_page/welcome.page";
import {AgoraPage} from "../community/agora/agora.page";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MenuPageRoutingModule,
        HttpClientModule,
        RouterModule
    ],
  declarations: [
      MenuPage,
      WelcomePage,
      AgoraPage,
  ]
})
export class MenuPageModule {}
