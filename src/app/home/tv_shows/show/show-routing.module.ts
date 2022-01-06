import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPage } from './show.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopChefPageRoutingModule {}
