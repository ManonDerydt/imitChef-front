import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeCandidatsPage } from './liste-candidats.page';

const routes: Routes = [
  {
    path: '',
    component: ListeCandidatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeCandidatsPageRoutingModule {}
