import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseEmissionPageRoutingModule } from './choose-show-routing.module';

import { ChooseShowPage } from './choose-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseEmissionPageRoutingModule
  ],
  declarations: [ChooseShowPage]
})
export class ChooseEmissionPageModule {}
