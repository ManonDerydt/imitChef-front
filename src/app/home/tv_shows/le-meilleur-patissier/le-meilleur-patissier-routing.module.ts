import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeMeilleurPatissierPage } from './le-meilleur-patissier.page';

const routes: Routes = [
  {
    path: '',
    component: LeMeilleurPatissierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeMeilleurPatissierPageRoutingModule {}
