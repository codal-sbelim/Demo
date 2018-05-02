import { Component, OnInit } from '@angular/core';
import { User, customNotificationOptions } from '../user';
import { UserService } from '../users.service';
import { NgProgress } from '@ngx-progressbar/core';
import { CustomerService } from '../customer.service';
import { environment } from '../../environments/environment';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public users: User[] = [];
  public loading: boolean = true;
  public customOptions = customNotificationOptions;
  
  constructor(
    private userService: UserService,
    private progress: NgProgress,
    private customerService: CustomerService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
    if (environment.isMemoryCacheAPIEnable) this.getUsers(); // Get usres from memory cache
    else this.getCustomer(); // Get users from  https://qa-503-int.callpotential.com

    /** Start NgProgress loader */
    this.progress.start();
    console.log(environment)
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        console.log("user API")
        this.users = users;
        this.loading = false;
        this.progress.complete(); /* Progress End */
      }, error => {
        console.log(error);
      })
  }

  /**
   * @method :getCustomerGet - Get customer list
   */
  getCustomer(): void {
    this.customerService.getAll({
      'locationId': 335
    }).subscribe(res => {
      //console.log("res : ===== ", res);
      if (res.body.items && res.body.items.length > 0) {
        this.users = res.body.items;
      }
      this.loading = false;
      this.progress.complete(); /* Progress End */
    }, error => {
      console.log("error : ", error);
      this.notifications.error(error.error.messages, "", this.customOptions)
      this.loading = false;
      this.progress.complete(); /* Progress End */
    })
  }
}
