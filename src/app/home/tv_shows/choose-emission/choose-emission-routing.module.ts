import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseEmissionPage } from './choose-emission.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseEmissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseEmissionPageRoutingModule {}
