import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CandidatesRoutingModule } from './candidates.routing.module';
import { CandidateComponent } from './candidate/candidate.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CandidatesRoutingModule

    ],
    declarations: [
      CandidateComponent
    ]
})
export class CandidatesModule {}