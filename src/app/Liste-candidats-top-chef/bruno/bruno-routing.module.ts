import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrunoPage } from './bruno.page';

const routes: Routes = [
  {
    path: '',
    component: BrunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrunoPageRoutingModule {}
