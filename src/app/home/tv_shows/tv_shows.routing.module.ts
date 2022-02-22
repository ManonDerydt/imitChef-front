import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseShowPage } from './choose-show/choose-show.page';
import {ShowPage} from "./show/show.page";

const routes: Routes = [
  {
    path: '',
    component: ChooseShowPage
  },
  {
    path: ':id',
    component: ShowPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tv_showsRoutingModule {}
