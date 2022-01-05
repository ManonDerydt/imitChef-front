import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TousEnCuisinePageRoutingModule } from './tous-en-cuisine-routing.module';

import { TousEnCuisinePage } from './tous-en-cuisine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TousEnCuisinePageRoutingModule
  ],
  declarations: [TousEnCuisinePage]
})
export class TousEnCuisinePageModule {}
