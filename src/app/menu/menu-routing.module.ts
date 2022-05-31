import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu.page';

import { WelcomePage } from "../welcome_page/welcome.page";
import { Sign_inPage } from "../profil/register/sign_in/sign_in.page";
import { AgoraPage } from "../community/agora/agora.page";
import {ConnexionPageModule} from "../profil/register/connexion/connexion.module";
import { AuthGuardService } from '../services/authGuard';

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
        path: 'connexion',
        loadChildren: () => import('../profil/register/connexion/connexion.module').then(m => m.ConnexionPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../profil/account/account.module').then(m => m.AccountPageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'shows',
        loadChildren: () => import('../home/tv_shows/tv_shows.module').then(m => m.Tv_showsModule)
      },
      {
        path: 'candidates',
        loadChildren: () => import('../home/candidates/candidates.module').then(m => m.CandidatesModule)
      },
      {
        path: 'reciepe',
        loadChildren: () => import('../home/reciepe/reciepe.module').then(m => m.ReciepePageModule)
      },
      // {
      //   path: 'reciepes-by-candidates',
      //   loadChildren: () => import('../home/tv_shows/show/reciepes-by-candidates/reciepes_by_candidates.module').then(m => m.ReciepesByCandidatesPageModule)
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuardService]
})
export class MenuPageRoutingModule { }
