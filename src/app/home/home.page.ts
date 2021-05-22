import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { CommonToast } from '../CommonToast';
import { HomeService } from '../services/homeservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  itemsDetail : any;
  constructor(private nav:NavController, 
    private menuCtrl: MenuController,
    private loadingController: LoadingController,
    private homeservice : HomeService,
    private commonToast : CommonToast) { 

    }

  ngOnInit() {
  }
  async chittihomepageloading(){   
    const loader =  await this.loadingController.create({
       message: 'Loading..',
      spinner: 'circles',
      
     });
    await loader.present().then( () => {
      this.homeservice.getItems().subscribe((result) => {
        this.itemsDetail = result; 
        console.log( this.itemsDetail);  
        loader.dismiss();
      },(error : HttpResponse<any>) => {         
            this.commonToast.presentToast(error.statusText);
            loader.dismiss();   
      });
    });

   }

  onBasketClick(){   
    this.nav.navigateForward('basket');
  }

  ionViewWillEnter(){
    this.chittihomepageloading().then();    
   }

}
