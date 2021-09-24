import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePlatPageRoutingModule } from './home-plat-routing.module';

import { HomePlatPage } from './home-plat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePlatPageRoutingModule
  ],
  declarations: [HomePlatPage]
})
export class HomePlatPageModule {}
