import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TousEnCuisinePage } from './tous-en-cuisine.page';

const routes: Routes = [
  {
    path: '',
    component: TousEnCuisinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TousEnCuisinePageRoutingModule {}
