import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThomasPage } from './thomas.page';

const routes: Routes = [
  {
    path: '',
    component: ThomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThomasPageRoutingModule {}
