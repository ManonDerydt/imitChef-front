import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrunoPageRoutingModule } from './bruno-routing.module';

import { BrunoPage } from './bruno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrunoPageRoutingModule
  ],
  declarations: [BrunoPage]
})
export class BrunoPageModule {}
