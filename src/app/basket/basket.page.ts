import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { CommonToast } from '../CommonToast';
import { HomeService } from '../services/homeservice';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  selectedItemList = new Map<number, number>();
  itemsListDetails : any;
  itemsPriceId : number[];
  buttondisable = true;
  constructor( private nav:NavController, 
    private route: ActivatedRoute,
    private homeservice : HomeService,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private commonToast : CommonToast) { 
    this.route.queryParams.subscribe(params => {
      this.selectedItemList = params["selectedItemsList"];           
   });
  }

  ngOnInit() {
  }
  async Basketloading(){   
    const loader =  await this.loadingController.create({
       message: 'Loading..',
      spinner: 'circles',      
     });
     
    await loader.present().then( () => {
      this.buttondisable = true;
      this.homeservice.getSelectedItems( this.itemsPriceId).subscribe((result) => {
        this.itemsListDetails = result;
        if(this.itemsListDetails.basketItemList.length > 0)
        {
         this.buttondisable = false;        
        }      
        loader.dismiss();
      },(error : HttpResponse<any>) => {         
            this.commonToast.presentToast(error.statusText);
            loader.dismiss();   
      });
    });

   }
   ionViewWillEnter(){
    this.LoadPage();  
   }
    LoadPage(){
    this.itemsPriceId = [];
    this.selectedItemList.forEach((val, key) => {
      this.itemsPriceId.push(val);
     });    
    this.Basketloading().then(); 
   }

   DeleteItem(itemId){
    this.DeleteAlert(itemId);
   }
   async DeleteAlert(itemId) {
    const alert = await this.alertController.create({
      header: 'Remove Item',
      subHeader:'Are you sure you want to remove this item?',
      buttons: [
        {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
                console.log('Confirm Cancel');
            }
        }, {
            text: 'Remove',
            handler: () => {
              this.selectedItemList.delete(itemId);
              this.LoadPage();
              this.commonToast.presentToast("sucessfully remvoed");
            }
        }
    ]
    });

    await alert.present();
  }
  checkout(){
    this.nav.navigateForward('checkout');
  }
}
