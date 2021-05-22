import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { OrderPage } from './order/order.page';


const routes: Routes = [
  {
    path: '',
    component:HomePage,
    pathMatch: 'full'
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
    loadChildren: () => import('./basket/basket.module').then( m => m.BasketPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
