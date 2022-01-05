import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TopChefPageRoutingModule } from './top-chef-routing.module';
import { TopChefPage } from './top-chef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopChefPageRoutingModule
  ],
  declarations: [TopChefPage]
})
export class TopChefPageModule {}
