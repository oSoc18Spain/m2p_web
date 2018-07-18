import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from '../../login/_services';
import { User } from '../../models';

import { AppComponent } from '../../app.component';

// translate module
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen: Boolean = false;
  lang: string = 'es';
  users: User = {
    id_employee: '0',
    role: ''
  };
  //Select which screen mobile menu will work. Medium is under 992px.
  showMenuIn = ['small', 'medium'];

  constructor(
    private translate: TranslateService,
    public router: Router,
    private userService: UserService
  ) {
    translate.setDefaultLang(this.lang);
    router.events.subscribe(val => {
      if (AppComponent.isLogged) {
        this.userService
          .getUserInfo()
          .pipe(first())
          .subscribe(users => {
            this.users = users[0];
          });
      }
    });
  }

  ngOnInit() {}

  switchLanguage() {
    if (this.lang == 'es') {
      this.lang = 'en';
      this.translate.use('en');
    } else if (this.lang == 'en') {
      this.lang = 'es';
      this.translate.use('es');
    }
  }

  isLogged = () => {
    return AppComponent.isLogged;
  };

  getWidthStatus = () => {
    return AppComponent.deviceWidth;
  };

  toggleMenu = () => {
    this.isOpen = !this.isOpen;
  };

  logout = () => {
    this.router.navigate(['login']);
  };
}
