import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TabsPageRoutingModule } from './tabs-routing.module';

import {TabsPage } from './tabs.page';
import {Tab1Page} from "../../app/home/tab1/tab1.page";
import {Tab2Page} from "../../app/Community/tab2/tab2.page";
import {Tab3Page} from "../../app/register/tab3.page";

@NgModule({
  imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TabsPageRoutingModule,
      HttpClientModule
  ],
  declarations: [
      TabsPage,
      Tab1Page,
      Tab2Page,
      Tab3Page,
  ]
})
export class TabsPageModule {}
