import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home',  icon: 'home' },
    { title: 'Orders', url: 'order', icon: 'timer-outline' },
    { title: 'My Account', url: 'myaccount', icon: 'person' },
    { title: 'Contact Us', url: 'contactus', icon: 'call-outline' }
  ];
  username : any;
  constructor(private nav:NavController) {
    this.username = localStorage.getItem('UserName');
  }
  LogOut(){
    localStorage.clear();
    this.nav.navigateRoot('login');
  }
  ionViewDidEnter() {  
    this.username = localStorage.getItem('UserName'); 
  }
}
