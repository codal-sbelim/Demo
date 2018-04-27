import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../users.service';
import { User, states, customNotificationOptions } from '../user';
import { NotificationsService } from 'angular2-notifications';
import { NgProgress } from '@ngx-progressbar/core';
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
  isLoaded: boolean = false;
  customOptions = customNotificationOptions;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private _notifications: NotificationsService,
    public progress: NgProgress
  ) { }

  ngOnInit() {
    this.progress.start();
    id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (id) this.getUser();
    else { this.isLoaded = true; this.progress.complete(); }
    this.createForm();
  }

  // Create reactive form for add/edit user screen using Form Builder
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
    console.log("this.userForm.value : ", this.userForm.status)
  }

  // Get user info by id for edit screen
  getUser(): void {
    this.userService.getUser(id)
      .subscribe(user => {
        this.isLoaded = true;
        this.user = user;
        let dob = this.user.dob.split('-') // Date format: YYYY-MM-DD
        console.log("User Info : ", user, dob);

        // Bind user info with form controls on edit
        this.userForm.setValue({
          first_name: this.user.first_name, // Required fields
          last_name: this.user.last_name, // Required fields
          email: this.user.email, // Required fields
          gender: this.user.gender || '', // Optional fields
          address: this.user.address || '', // Optional fields
          department: this.user.department || '', //Optional fields
          state: this.user.state || this.states[0], // Optional fields
          isAgree: this.user.isAgree || false, // Optional fields
          dob: { year: parseInt(dob[0]), month: parseInt(dob[1]) + 1, day: parseInt(dob[2]) } || '' // Optional fields
        });
        this.progress.complete();
      })
  }

  onSubmit() {
    let userData = this.userForm.value;
    userData.id = id;
    userData.dob = Object.values(this.userForm.value.dob).join('-');
    console.log(userData)

    if (id) {
      // If edit mode : Update user
      this.userService.updateUser(userData)
        .subscribe(() => {
          this._notifications.success("User updated successfully.", "", this.customOptions);
          this.router.navigate(['list']);
        })
    } else {
      // Add new user
      this.userService.addUser(userData)
        .subscribe(() => {
          this._notifications.success("User addedd successfully.", "", this.customOptions);
          this.router.navigate(['list']);
        })
    }
  }
}
