import { Component, OnInit } from '@angular/core';

import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {name: 'Helium', weight: 4.0026, symbol: 'He'}
  ]
  a = [{p:123},{p:456}]
  constructor() {
  }
  //eventos: tarea1, tarea2

  ngOnInit() {
  }

}
