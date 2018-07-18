import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../../models';
import { UserService } from '../../login/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  currentUrl: string;

  constructor(private userService: UserService, private route: Router) {
    this.currentUrl = this.route.url.substring(1);
  }

  ngOnInit() {
    this.userService
      .getUserInfo()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      });
  }
}
