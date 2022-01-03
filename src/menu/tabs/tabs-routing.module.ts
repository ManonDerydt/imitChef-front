import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

import {Tab1Page} from "../../app/home/tab1/tab1.page";
import {Tab3Page} from "../../app/register/tab3.page";
import {Tab2Page} from "../../app/Community/tab2/tab2.page";

const routes: Routes = [
  {
    path: 'home',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        component: Tab3Page
      },
      // {
      //   path: 'tab2',
      //   component: Tab2Page
      // },
      // {
      //   path: 'tab3',
      //   component: Tab3Page
      // }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
