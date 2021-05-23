import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { CommonToast } from '../CommonToast';
import { HomeService } from '../services/homeservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  map = new Map<number, number>();
  Basket = new Map<number, number>();
  itemsListDetails : any;
  basketcount = 0;
  username : any;
  UserInfoID : any;
   constructor(private nav:NavController, 
    private menuCtrl: MenuController,
    private loadingController: LoadingController,
    private homeservice : HomeService,
    private commonToast : CommonToast) { 
      this.UserInfoID = localStorage.getItem("UserInfoID");
      this.username = localStorage.getItem("UserName");
    }

  ngOnInit() {
    
  }
  async homepageloading(){   
    const loader =  await this.loadingController.create({
       message: 'Loading..',
      spinner: 'circles',
      
     });
    await loader.present().then( () => {
      this.homeservice.getItems().subscribe((result) => {
        this.itemsListDetails = result;       
        loader.dismiss();
      },(error : HttpResponse<any>) => {         
            this.commonToast.presentToast(error.statusText);
            loader.dismiss();   
      });
    });

   }
   getselectedpriceId(itemPriceevent, itemId){
       this.map.set(itemId, itemPriceevent.detail.value);
  }
  onBasketClick(){ 
    let navigationExtras: NavigationExtras = {
      queryParams: {          
        selectedItemsList: this.Basket
      } };  
    this.nav.navigateForward('basket',navigationExtras);
  }
  
  addtoBasket(selecteditemid){
     const intVAL = this.map.get(selecteditemid);
    if (!isNaN(intVAL)) {
      this.Basket.set(selecteditemid, this.map.get(selecteditemid));
      this.basketcount = this.Basket.size;      
    }
   
  }
  ionViewDidEnter() {       
    this.menuCtrl.enable(true);    
  }
  ionViewWillEnter(){    
    this.homepageloading().then();    
   }

}
