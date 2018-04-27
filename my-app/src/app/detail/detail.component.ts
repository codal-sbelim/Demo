import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    /* Get route params */
    const id = parseInt(this.route.snapshot.paramMap.get('id')) ;
    const url = this.route.snapshot.url.join('/');
    console.log("Id: --- ", id);
    console.log("this.route : --- ", this.route);

    // Get user info by Id
    this.userService.getUser(id)
      .subscribe(user => {
        this.user = user;
        console.log("User: ", user);
      })
  }
}
