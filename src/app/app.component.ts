import { Component, OnInit } from '@angular/core';

// translate module
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'widthStatus($event.target.innerWidth)'
}
})
export class AppComponent implements OnInit{
  static deviceWidth: string;
  lang: string = 'es';
  static isLogged: Boolean = false;
  

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

  ngOnInit(){
    this.widthStatus(window.innerWidth);
  }

  
}
