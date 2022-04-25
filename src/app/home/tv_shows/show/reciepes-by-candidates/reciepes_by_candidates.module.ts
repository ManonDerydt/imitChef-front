import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReciepesByCandidatesPageRoutingModule } from './reciepes_by_candidates-routing.module';

// import { Reciepes_by_candidatesPage } from './reciepes_by_candidates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // ReciepesByCandidatesPageRoutingModule
  ],
  // declarations: [Reciepes_by_candidatesPage]
})
export class ReciepesByCandidatesPageModule {}
