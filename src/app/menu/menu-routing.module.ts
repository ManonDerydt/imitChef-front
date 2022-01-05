import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu.page';

import {WelcomePage} from "../welcome_page/welcome.page";
import {Sign_inPage} from "../profil/register/sign_in/sign_in.page";
import {AgoraPage} from "../community/agora/agora.page";
import {ChooseEmissionPageModule} from "../home/tv_shows/choose-emission/choose-emission.module";


const routes: Routes = [
  {
    path: 'home',
    component: MenuPage,
    children: [
      {
        path: 'account',
        component: Sign_inPage
      },
      {
        path: 'welcome',
        component: WelcomePage
      },
      {
        path: 'agora',
        component: AgoraPage
      },
      {
        path: 'sign_in',
        component: Sign_inPage
      },
      {
        path:'choose-emission',
        component: ChooseEmissionPageModule
      }
    ]
  },
  {
    path: '',
    redirectTo: '/account',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MenuPageRoutingModule {}
