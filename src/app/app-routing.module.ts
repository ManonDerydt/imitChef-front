import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'top-chef',
    loadChildren: () => import('./top-chef/top-chef.module').then( m => m.TopChefPageModule)
  },
  {
    path: 'le-meilleur-patissier',
    loadChildren: () => import('./le-meilleur-patissier/le-meilleur-patissier.module').then( m => m.LeMeilleurPatissierPageModule)
  },
  {
    path: 'objectif-top-chef',
    loadChildren: () => import('./objectif-top-chef/objectif-top-chef.module').then( m => m.ObjectifTopChefPageModule)
  },
  {
    path: 'tous-en-cuisine',
    loadChildren: () => import('./tous-en-cuisine/tous-en-cuisine.module').then( m => m.TousEnCuisinePageModule)
  },
  {
    path: 'liste-candidats',
    loadChildren: () => import('./liste-candidats/liste-candidats.module').then( m => m.ListeCandidatsPageModule)
  },
  {
    path: 'home-plat',
    loadChildren: () => import('./home-plat/home-plat.module').then( m => m.HomePlatPageModule)
  },
  {
    path: 'mathias',
    loadChildren: () => import('./Liste-candidats-top-chef/mathias/mathias.module').then(m => m.MathiasPageModule)
  },
  {
    path: 'bruno',
    loadChildren: () => import('./Liste-candidats-top-chef/bruno/bruno.module').then(m => m.BrunoPageModule)
  },
  {
    path: 'chloe',
    loadChildren: () => import('./Liste-candidats-top-chef/chloe/chloe.module').then(m => m.ChloePageModule)
  },
  {
    path: 'thomas',
    loadChildren: () => import('./Liste-candidats-top-chef/thomas/thomas.module').then(m => m.ThomasPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./top-chef/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'choose-emission',
    loadChildren: () => import('./choose-emission/choose-emission.module').then( m => m.ChooseEmissionPageModule)
  },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
