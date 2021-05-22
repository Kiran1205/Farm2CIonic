import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { OrderPage } from './order/order.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasketPage } from './basket/basket.page';
import { ContactusPage } from './contactus/contactus.page';
import { HomeService } from './services/homeservice';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommonToast } from './CommonToast';

@NgModule({
  declarations:[
    AppComponent,
    HomePage,
    OrderPage,
    BasketPage,
    ContactusPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,   
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule],
  providers: [
    HomeService,CommonToast,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
