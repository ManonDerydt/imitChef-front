import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TopChefPageRoutingModule } from './show-routing.module';
import { ShowPage } from './show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopChefPageRoutingModule
  ],
  declarations: [ShowPage]
})
export class TopChefPageModule {}
