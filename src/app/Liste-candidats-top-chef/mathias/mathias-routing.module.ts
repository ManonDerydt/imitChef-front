import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathiasPage } from './mathias.page';

const routes: Routes = [
  {
    path: '',
    component: MathiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathiasPageRoutingModule {}
