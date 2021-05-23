import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddressPage } from './address/address.page';
import { BasketPage } from './basket/basket.page';
import { CheckoutPage } from './checkout/checkout.page';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { OrderPage } from './order/order.page';
import { RegisterPage } from './register/register.page';


const routes: Routes = [
  {
    path: '',
    component:LoginPage,
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginPage,
  },
  {
    path: 'order', component:OrderPage,  pathMatch: 'full'
  }, 
  {
    path: 'home',
     component:HomePage
  },
  {
    path: 'myaccount',
    loadChildren: () => import('./myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'basket',
    component:BasketPage
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'checkout',
    component:CheckoutPage
  },
  {
    path: 'address',
    component:AddressPage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    component:RegisterPage
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
