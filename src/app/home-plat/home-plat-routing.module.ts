import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePlatPage } from './home-plat.page';

const routes: Routes = [
  {
    path: '',
    component: HomePlatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePlatPageRoutingModule {}
