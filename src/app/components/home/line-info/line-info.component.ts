import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from '../../../login/_services';
import { User } from '../../../models';

@Component({
  selector: 'app-line-info',
  templateUrl: './line-info.component.html',
  styleUrls: ['./line-info.component.css']
})
export class LineInfoComponent implements OnInit {
  users: User = {
    id_employee: '0',
    role: ''
  };
  constructor(private userService: UserService) {
    this.userService
      .getUserInfo()
      .pipe(first())
      .subscribe(users => {
        this.users = users[0];
      });
  }

  ngOnInit() {}
}
