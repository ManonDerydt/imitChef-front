import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPage } from './show.page';
import {ChooseShowPage} from "../choose-show/choose-show.page";

const routes: Routes = [
  {
    path: '',
    component: ShowPage
  },
  {
    path: ':id',
    data: {
      title: 'Tv-show',
      urls: [
        {
          title: 'Show',
          url: '/show/:id'
        }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPageRoutingModule {}
