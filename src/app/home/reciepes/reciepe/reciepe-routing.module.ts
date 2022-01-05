import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReciepePage } from './reciepe.page';

const routes: Routes = [
  {
    path: '',
    component: ReciepePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePlatPageRoutingModule {}
