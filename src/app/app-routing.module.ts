import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'show',
    loadChildren: () => import('./home/tv_shows/show/show.module').then(m => m.ShowPageModule)
  },
  // {
  //   path: 'showCard',
  //   loadChildren: () => import('./home/tv_shows/show/show-card.module').then(m => m.ShowCardPageModule)
  // },
  {
    path: 'candidates',
    loadChildren: () => import('./home/candidates/candidates_list/candidates.module').then(m => m.ListeCandidatsPageModule)
  },
  {
    path: 'reciepe',
    loadChildren: () => import('./home/reciepes/reciepe/reciepe.module').then(m => m.HomePlatPageModule)
  },
  {
    path: 'mathias',
    loadChildren: () => import('./home/candidates/Liste-candidats-top-chef/mathias/mathias.module').then(m => m.MathiasPageModule)
  },
  {
    path: 'bruno',
    loadChildren: () => import('./home/candidates/Liste-candidats-top-chef/bruno/bruno.module').then(m => m.BrunoPageModule)
  },
  {
    path: 'chloe',
    loadChildren: () => import('./home/candidates/Liste-candidats-top-chef/chloe/chloe.module').then(m => m.ChloePageModule)
  },
  {
    path: 'thomas',
    loadChildren: () => import('./home/candidates/Liste-candidats-top-chef/thomas/thomas.module').then(m => m.ThomasPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./home/tv_shows/show/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'choose-show',
    loadChildren: () => import('./home/tv_shows/choose-show/choose-show.module').then(m => m.ChooseEmissionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./profil/register/connexion/connexion.module').then(m => m.ConnexionPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./profil/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'add-post',
    loadChildren: () => import('./community/add-post/add-post.module').then(m => m.AddPostPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
