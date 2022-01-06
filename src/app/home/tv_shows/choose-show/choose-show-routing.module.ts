import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseShowPage } from './choose-show.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseEmissionPageRoutingModule {}
