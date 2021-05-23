import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { CommonToast } from '../CommonToast';
import { UserService } from '../services/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(  public menuCtrl: MenuController,
    public formBuilder: FormBuilder,
    private nav:NavController,
    private userservice : UserService, 
    private loadingController: LoadingController,
    private commonToast : CommonToast ) { }
    
 
   loginform: FormGroup;
   userinfo:any;
  

   ngOnInit() {
    this.loginform = this.formBuilder.group({          
      phonenumber: ['', [Validators.required, Validators.pattern("[0-9]{10}$")]],
      userpassword:['', [Validators.required, Validators.pattern("[0-9a-zA-Z]{4,15}$")]],
    });
  }

  ionViewDidEnter() {  
    localStorage.clear();  
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);    
  }
  ionViewWillEnter(){
    
  }

  Login(){
    if(!this.loginform.valid)
    return;
    this.loginform.value.phonenumber = '' + this.loginform.value.phonenumber;
    console.log(this.loginform.value);
    this.getuserInfo(this.loginform.value);
  }

  async getuserInfo(data){   
    const loader =  await this.loadingController.create({
       message: 'Loading..',
      spinner: 'circles',
      
     });
    await loader.present().then( () => {
      this.userservice.getuserInfo(data).subscribe((result) => {
        this.userinfo = result; 
        if( this.userinfo){
          console.log(this.userinfo);
          localStorage.setItem("UserInfoID", result.userInfoID);
          localStorage.setItem("UserName", result.userName);
          this.nav.navigateForward("home");     
         
        }
        else{
          this.commonToast.presentToast("Please correct Phone Number/Password");
        }
        loader.dismiss();
      },(error : HttpResponse<any>) => {         
            this.commonToast.presentToast(error.statusText);
            loader.dismiss();   
      });
    });

   } 
   gotoregister(){
    this.nav.navigateForward("register");
  }
}
