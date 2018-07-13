import { Component } from '@angular/core';

// translate module
import { TranslateService } from '@ngx-translate/core';

// Material Components
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
