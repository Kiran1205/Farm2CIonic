import { HttpResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, MenuController, NavController } from '@ionic/angular';
import firebase from 'firebase/app';
import 'firebase/auth';
import { CommonToast } from '../CommonToast';
import { UserService } from '../services/userService';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(  public menuCtrl: MenuController,
    public formBuilder: FormBuilder,
    private nav:NavController,
    private userservice : UserService, 
    private loadingController: LoadingController,
    private commonToast : CommonToast ) { }
    
   otpSent = false;
   windowReference:any;
   confirmationResult :any;
   registerform: FormGroup;
   userinfo:any;


   ngOnInit() {
    this.registerform = this.formBuilder.group({    
      username:['',Validators.required],     
      phonenumber: ['', [Validators.required, Validators.pattern("[0-9]{10}$")]],
      userpassword:['', [Validators.required, Validators.pattern("[0-9a-zA-Z]{4,15}$")]],
      otp:['']
    });
  }

  ionViewDidEnter() {  
    localStorage.clear();  
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);
    this.windowReference = this.windowRef; 
    this.windowReference.recaptchaVerifier =new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible'
      });  
  }
  ionViewWillEnter(){
    
  }
  Register(){
    if(!this.registerform.valid)
    return;
    this.registerform.value.phonenumber = ''+ this.registerform.value.phonenumber;
    this.confirmationResult.confirm(this.registerform.value.otp).then(user=>{
      console.log(this.registerform.value);
      this.RegisterUser(this.registerform.value);
      });
  }
  async SendOTP(){

    const loader =  await this.loadingController.create({
      message: 'Sending OTP..',
     spinner: 'circles',     
    });
    await loader.present().then( () => {
    firebase.auth().signInWithPhoneNumber('+91' + this.registerform.value.phonenumber, this.windowReference.recaptchaVerifier)
    .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    this.confirmationResult = confirmationResult;
    this.otpSent = true;
    loader.dismiss();
    }).catch(err => {
    console.log(err)
    loader.dismiss(); 
    })   
  },(error : HttpResponse<any>) => {         
        this.commonToast.presentToast(error.statusText);
        loader.dismiss();   
  });
}

  get windowRef(){
    return window;
}
  async RegisterUser(data){   
    const loader =  await this.loadingController.create({
       message: 'Loading..',
      spinner: 'circles',
      
     });
    await loader.present().then( () => {
      this.userservice.registeruserInfo(data).subscribe((result) => {
        this.userinfo = result; 

        localStorage.setItem("UserInfoID", result.userInfoID);
        localStorage.setItem("UserName", result.userName);
        this.nav.navigateForward("home");     
        loader.dismiss();
      },(error : HttpResponse<any>) => {         
            this.commonToast.presentToast(error.statusText);
            loader.dismiss();   
      });
    });

   }
}
