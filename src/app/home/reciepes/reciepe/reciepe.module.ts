import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePlatPageRoutingModule } from './reciepe-routing.module';

import { ReciepePage } from './reciepe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePlatPageRoutingModule
  ],
  declarations: [ReciepePage]
})
export class HomePlatPageModule {}
