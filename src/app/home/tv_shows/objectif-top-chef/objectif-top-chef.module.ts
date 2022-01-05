import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectifTopChefPageRoutingModule } from './objectif-top-chef-routing.module';

import { ObjectifTopChefPage } from './objectif-top-chef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectifTopChefPageRoutingModule
  ],
  declarations: [ObjectifTopChefPage]
})
export class ObjectifTopChefPageModule {}
