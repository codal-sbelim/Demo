import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../users.service';
import { User, states } from '../user';
import { NotificationsService } from 'angular2-notifications';

let id;
const now = new Date();

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  states = states;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private _notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.getUser();
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(4)]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: '',
      address: '',
      department: '',
      state: states[0],
      isAgree: false,
      dob: ''
    })
  }

  getUser(): void {
    id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id)
      .subscribe(user => {
        this.user = user;
        let dob = this.user.dob.split('/') // Date format: MM-DD-YYYY
        console.log("User Info : ", user);
        this.userForm.setValue({
          first_name: this.user.first_name, // Required fields
          last_name: this.user.last_name, // Required fields
          email: this.user.email, // Required fields
          gender: this.user.gender || '', // Optional fields
          address: this.user.address || '', // Optional fields
          department: this.user.department || '', //Optional fields
          state: this.user.state || this.states[0], // Optional fields
          isAgree: this.user.isAgree || false, // Optional fields
          dob: { year: parseInt(dob[2]), month: parseInt(dob[0]) + 1, day: parseInt(dob[1]) } || '' // Optional fields
        });
        console.log("this.userForm.value : ", )
      })
  }

  onSubmit() {
    let updatedUserData = this.userForm.value;
    updatedUserData.id = id;
    updatedUserData.dob = Object.values(this.userForm.value.dob).join('/');
    this.userService.updateUser(this.userForm.value)
      .subscribe(() => {
        this._notifications.success("User updated successfully.", "", {
          timeOut: 1000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        });
        this.router.navigate(['list']);
      })
  }
}
