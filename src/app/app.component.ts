import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'widthStatus($event.target.innerWidth)'
  }
})
export class AppComponent implements OnInit {
  static deviceWidth: string;
  static isLogged: Boolean = false;

  constructor() {}

  widthStatus = size => {
    if (size > 992) {
      AppComponent.deviceWidth = 'large';
    } else if (size > 502) {
      AppComponent.deviceWidth = 'medium';
    } else {
      AppComponent.deviceWidth = 'small';
    }
  };

  getWidthStatus = () => {
    return AppComponent.deviceWidth;
  };

  ngOnInit() {
    this.widthStatus(window.innerWidth);
  }
}
