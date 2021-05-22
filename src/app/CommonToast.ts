  
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable()
export class CommonToast{

    constructor(public toastController: ToastController) {}
    
    async presentToast(msg) {
        const toast = await this.toastController.create({
          message: msg,
          duration: 2000
        });
        toast.present();
      }  
         
}