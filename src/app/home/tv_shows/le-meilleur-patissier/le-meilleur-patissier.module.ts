import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeMeilleurPatissierPageRoutingModule } from './le-meilleur-patissier-routing.module';

import { LeMeilleurPatissierPage } from './le-meilleur-patissier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeMeilleurPatissierPageRoutingModule
  ],
  declarations: [LeMeilleurPatissierPage]
})
export class LeMeilleurPatissierPageModule {}
