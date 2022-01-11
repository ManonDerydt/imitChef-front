import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseShowPage } from './choose-show.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseShowPage
  },
  {
    path: ':id',
    data: {
      title: 'Tv-show',
      urls: [
        // {
        //   title: 'Tv-show',
        //   url: '/show'
        // },
        {
          title: 'Show',
          url: '/show/:id'
        }
      ]
    },
    component: ChooseShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseEmissionPageRoutingModule {}
