import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThomasPageRoutingModule } from './thomas-routing.module';

import { ThomasPage } from './thomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThomasPageRoutingModule
  ],
  declarations: [ThomasPage]
})
export class ThomasPageModule {}
