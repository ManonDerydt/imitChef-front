import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {Tv_showsRoutingModule} from "./tv_shows.routing.module";
import {ChooseShowPage} from "./choose-show/choose-show.page";
import {ShowPage} from "./show/show.page";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Tv_showsRoutingModule,

    ],
    declarations: [
        ChooseShowPage,
        ShowPage
    ]
})
export class Tv_showsModule {}