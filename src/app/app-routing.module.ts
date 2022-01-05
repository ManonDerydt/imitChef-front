import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'top-chef',
    loadChildren: () => import('./home/tv_shows/top-chef/top-chef.module').then(m => m.TopChefPageModule)
  },
  {
    path: 'le-meilleur-patissier',
    loadChildren: () => import('./home/tv_shows/le-meilleur-patissier/le-meilleur-patissier.module').then(m => m.LeMeilleurPatissierPageModule)
  },
  {
    path: 'objectif-top-chef',
    loadChildren: () => import('./home/tv_shows/objectif-top-chef/objectif-top-chef.module').then(m => m.ObjectifTopChefPageModule)
  },
  {
    path: 'tous-en-cuisine',
    loadChildren: () => import('./home/tv_shows/tous-en-cuisine/tous-en-cuisine.module').then(m => m.TousEnCuisinePageModule)
  },
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
    loadChildren: () => import('./home/tv_shows/top-chef/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'choose-emission',
    loadChildren: () => import('./home/tv_shows/choose-emission/choose-emission.module').then(m => m.ChooseEmissionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./profil/register/connexion/connexion.module').then(m => m.ConnexionPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./profil/account/account.module').then( m => m.AccountPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
