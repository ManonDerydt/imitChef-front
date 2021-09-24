import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore/';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

export const firebaseConfig = {
  apiKey: "*******************************************",
  authDomain: "**********-**********.firebaseapp.com",
  databaseURL: "https://**********-**********.firebaseio.com",
  projectId: "**********-**********",
  storageBucket: "**********-**********.appspot.com",
  messagingSenderId: "**********",
  appId: "1:**********:web:********************"
};
