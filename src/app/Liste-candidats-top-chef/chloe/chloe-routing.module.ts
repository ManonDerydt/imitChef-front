import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChloePage } from './chloe.page';

const routes: Routes = [
  {
    path: '',
    component: ChloePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChloePageRoutingModule {}
