import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReciepePage } from './reciepe.page';
import {ShowPage} from "../tv_shows/show/show.page";

const routes: Routes = [
  {
    path: ':id',
    component: ReciepePage
  },
  // {
  //   path: 'candidate/:id',
  //   component: ShowPage
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReciepePageRoutingModule {}