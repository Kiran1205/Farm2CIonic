import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { CommonToast } from '../CommonToast';
import { HomeService } from '../services/homeservice';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(private nav:NavController, 
    private menuCtrl: MenuController,
    private loadingController: LoadingController,
    private homeservice : HomeService,
    private commonToast : CommonToast) { }

  ngOnInit() {
  }
  addAddress(){
    this.nav.navigateForward('address');
  }
}
