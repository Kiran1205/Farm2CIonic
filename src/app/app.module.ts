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
import { CheckoutPage } from './checkout/checkout.page';
import { AddressPage } from './address/address.page';
import { LoginPage } from './login/login.page';
import firebase from 'firebase/app';
import 'firebase/auth';
import { UserService } from './services/userService';
import { RegisterPage } from './register/register.page';

var firebaseConfig = {
  apiKey: "AIzaSyAm-CVsUGssmWGHz9qeqDYgkJ7L2lhSU1o",
  authDomain: "farm2c-5ec0c.firebaseapp.com",
  projectId: "farm2c-5ec0c",
  storageBucket: "farm2c-5ec0c.appspot.com",
  messagingSenderId: "682377620963",
  appId: "1:682377620963:web:3ce521cd766a52e64b44d6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations:[
    AppComponent,
    HomePage,
    OrderPage,
    BasketPage,
    CheckoutPage,
    ContactusPage,
    AddressPage,
    LoginPage,
    RegisterPage],
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
    HomeService,
    CommonToast,
    UserService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
