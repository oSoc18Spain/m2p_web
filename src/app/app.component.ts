import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// translate module
import { TranslateService } from '@ngx-translate/core';

// Material Components
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'widthStatus($event.target.innerWidth)'
}
})
export class AppComponent implements OnInit{
  private static deviceWidth: string;
  private isOpen: Boolean = false;
  lang: string = 'es';
  
  //Select which screen mobile menu will work. Medium is under 992px. 
  showMenuIn = ['small','medium'];
  

  constructor(private translate: TranslateService, public router: Router) {
    translate.setDefaultLang(this.lang);
  }

  switchLanguage() {
    if(this.lang == 'es'){
      this.lang = 'en'
      this.translate.use('en')
    }else if(this.lang == 'en'){
      this.lang = 'es'
      this.translate.use('es')
    }
  }

  widthStatus = size => {
    if(size > 992){
      AppComponent.deviceWidth = 'large';
    }else if(size > 502){
      AppComponent.deviceWidth = 'medium';
    }else{
      AppComponent.deviceWidth = 'small';
    }  
  }

  getWidthStatus = () => {
    return AppComponent.deviceWidth;
  }

  toggleMenu = () => {
    this.isOpen = !this.isOpen;    
  }

  logout = () => {
    this.router.navigate(['login']);
  }

  ngOnInit(){
    this.widthStatus(window.innerWidth);
  }

  
}
