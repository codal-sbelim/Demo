import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../users.service';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    public progress: NgProgress
  ) { }

  ngOnInit() {
    this.getUsers();
    /** progress starts on init */
    this.progress.start();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
        /* Progress End */
        this.progress.complete();
      })
  }
}
