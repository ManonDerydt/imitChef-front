import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseEmissionPageRoutingModule } from './choose-emission-routing.module';

import { ChooseEmissionPage } from './choose-emission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseEmissionPageRoutingModule
  ],
  declarations: [ChooseEmissionPage]
})
export class ChooseEmissionPageModule {}
