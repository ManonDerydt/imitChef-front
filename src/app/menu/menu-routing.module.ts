import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu.page';

import {WelcomePage} from "../welcome_page/welcome.page";
import {Sign_inPage} from "../profil/register/sign_in/sign_in.page";
import {AgoraPage} from "../community/agora/agora.page";

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'agora',
        component: AgoraPage
      },
      {
        path: 'sign_in',
        loadChildren: () => import('../profil/register/sign_in/sign_in.module').then(m => m.SignInModule)
      },
      {
        path: 'shows',
        loadChildren: () => import('../home/tv_shows/tv_shows.module').then(m => m.Tv_showsModule)
      },
      {
        path: 'reciepe',
        loadChildren: () => import('../home/reciepe/reciepe.module').then( m => m.ReciepePageModule)
      },
      {
        path: 'reciepes-by-candidates',
        loadChildren: () => import('../home/tv_shows/show/reciepes-by-candidates/reciepes_by_candidates.module').then(m => m.ReciepesByCandidatesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MenuPageRoutingModule {}
