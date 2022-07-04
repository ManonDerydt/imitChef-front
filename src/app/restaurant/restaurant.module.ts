import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantPageRoutingModule } from './restaurant.routing.module';
import { ReciepePage } from "../home/reciepe/reciepe.page";
import { RestaurantPage } from './restaurant.page';
import { ReciepePageRoutingModule} from "../home/reciepe/reciepe.routing.module";
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantPageRoutingModule,
    NgCalendarModule,
    ReciepePageRoutingModule
  ],
  declarations: [
      ReciepePage,
    RestaurantPage

  ]
})
export class RestaurantPageModule {}
