import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatesPage } from './candidates.page';

const routes: Routes = [
  {
    path: '',
    component: CandidatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeCandidatsPageRoutingModule {}
