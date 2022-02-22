import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReciepePageRoutingModule } from './reciepe.routing.module';

import { ReciepePage } from './reciepe.page';
import {Tv_showsRoutingModule} from "../tv_shows/tv_shows.routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReciepePageRoutingModule,
    Tv_showsRoutingModule,
  ],
  declarations: [ReciepePage]
})
export class ReciepePageModule {}
