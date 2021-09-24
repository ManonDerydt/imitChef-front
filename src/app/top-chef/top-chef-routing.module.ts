import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopChefPage } from './top-chef.page';

const routes: Routes = [
  {
    path: '',
    component: TopChefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopChefPageRoutingModule {}
