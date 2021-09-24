import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeCandidatsPageRoutingModule } from './liste-candidats-routing.module';

import { ListeCandidatsPage } from './liste-candidats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeCandidatsPageRoutingModule
  ],
  declarations: [ListeCandidatsPage]
})
export class ListeCandidatsPageModule {}
