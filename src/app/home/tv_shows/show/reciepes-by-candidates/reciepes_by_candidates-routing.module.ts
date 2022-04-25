import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reciepes_by_candidatesPage } from './reciepes_by_candidates.page';
import {ShowPage} from "../show.page";

const routes: Routes = [
  {
    path: '',
    component: ShowPage
  },
  {
    path: ':id',
    component: Reciepes_by_candidatesPage
  },
  // {
  //   path: 'candidate/:candidateId',
  //   component: Reciepes_by_candidatesPage
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReciepesByCandidatesPageRoutingModule {}
