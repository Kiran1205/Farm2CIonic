import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  addressForm: FormGroup;
  constructor(private nav:NavController,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      // userAddressID: [,Validators.required],
      phoneNumber: [,Validators.required],
      name:[,Validators.required],
      pinCode: [,Validators.required],
      address:[,Validators.required],
      address1: [,Validators.required],
      landMark:[,Validators.required],
      state:[,Validators.required],
    });   
  }
  Save(){
   console.log(this.addressForm.value);
 }

}
