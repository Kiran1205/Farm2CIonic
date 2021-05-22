import { Component } from '@angular/core';
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
  
  constructor() {}
}
