import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectifTopChefPage } from './objectif-top-chef.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectifTopChefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectifTopChefPageRoutingModule {}
