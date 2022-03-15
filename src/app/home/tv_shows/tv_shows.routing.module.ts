import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseShowPage } from './choose-show/choose-show.page';
import {ShowPage} from "./show/show.page";
import {Reciepes_by_candidatesPage} from "./show/reciepes-by-candidates/reciepes_by_candidates.page";

const routes: Routes = [
  {
    path: '',
    component: ChooseShowPage
  },
  {
    path: ':id',
    component: ShowPage
  },
  {
    path: 'candidate/:candidateId',
    component: Reciepes_by_candidatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tv_showsRoutingModule {}
