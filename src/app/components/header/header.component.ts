import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../../app.component';
// Material Components
import {MatButtonModule} from '@angular/material/button';
import { log } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private isOpen: Boolean = false;
  
  //Select which screen mobile menu will work. Medium is under 992px. 
  showMenuIn = ['small','medium'];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  isLogged = () => {    
    return AppComponent.isLogged;
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

}
