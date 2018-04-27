import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../users.service';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    public progress: NgProgress
  ) {
  }

  ngOnInit() {
    this.progress.start();
    this.getUser();
  }

  getUser(): void {
    /* Get route params */
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    const url = this.route.snapshot.url.join('/');

    // Get user info by Id
    this.userService.getUser(id)
      .subscribe(user => {
        this.user = user;
        this.progress.complete();
      });
  }
}
