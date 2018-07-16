import { Component, OnInit } from '@angular/core';

// translate module
import { TranslateService } from '@ngx-translate/core';

// Material Components
import {MatButtonModule} from '@angular/material/button';
import { log } from 'util';

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
  

  constructor(private translate: TranslateService) {
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
    AppComponent.deviceWidth = size < 992 ? 'small' : 'large';    
  }

  getWidthStatus = () => {
    return AppComponent.deviceWidth;
  }

  toggleMenu = () => {
    console.log(this.isOpen);
    
    this.isOpen = !this.isOpen;    
  }

  ngOnInit(){
    this.widthStatus(window.innerWidth);
  }
}
