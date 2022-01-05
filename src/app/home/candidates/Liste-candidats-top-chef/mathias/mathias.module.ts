import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathiasPageRoutingModule } from './mathias-routing.module';

import { MathiasPage } from './mathias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathiasPageRoutingModule
  ],
  declarations: [MathiasPage]
})
export class MathiasPageModule {}
