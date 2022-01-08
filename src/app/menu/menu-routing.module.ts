import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu.page';

import {WelcomePage} from "../welcome_page/welcome.page";
import {Sign_inPage} from "../profil/register/sign_in/sign_in.page";
import {AgoraPage} from "../community/agora/agora.page";
import {ChooseEmissionPageModule} from "../home/tv_shows/choose-show/choose-show.module";


const routes: Routes = [
  {
    path: 'home',
    component: MenuPage,
    children: [
      {
        path: 'profile',
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
    ]
  },
  {
    path: '',
    redirectTo: '/choose-show',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MenuPageRoutingModule {}
