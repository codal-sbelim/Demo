import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  city = ["Ahmedabad", "Surat", "Banglore", "Mumbai"];

  user = new Registration(1,"Shahin", this.city[0]);
  submitted = false;
  
  onSubmit() {
    this.submitted = true;
  }

  get getData() {
    return JSON.stringify(this.user);
  }

}
