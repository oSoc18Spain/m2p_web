import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../../app.component';

// translate module
import { TranslateService } from '@ngx-translate/core';

// Material Components
import { MatButtonModule } from '@angular/material/button';
import { log } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen: Boolean = false;
  lang: string = 'es';

  //Select which screen mobile menu will work. Medium is under 992px.
  showMenuIn = ['small', 'medium'];

  constructor(private translate: TranslateService, public router: Router) {
    translate.setDefaultLang(this.lang);
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
