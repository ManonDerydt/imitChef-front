import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChloePageRoutingModule } from './chloe-routing.module';

import { ChloePage } from './chloe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChloePageRoutingModule
  ],
  declarations: [ChloePage]
})
export class ChloePageModule {}
