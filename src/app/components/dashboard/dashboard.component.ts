import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Datatable } from '../../models';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  SERVER: string = environment.server;
  PORT: number = environment.port;
  datatable: Datatable = {
    status: 0,
    columns: []
  };

  constructor(private dashboard: DashboardService) {}

  ngOnInit() {
    this.getDashboardSubscription();
  }

  changeColumns = () => {
    //Calculate the number of columns and it changes the CSS
    const ncolumns = this.datatable.columns.length;
    document
      .getElementById('table')
      .style.setProperty('grid-template-columns', `repeat(${ncolumns}, 1fr)`);
  };

  getDashboardSubscription = () => {
    this.dashboard.getDashboardJSON().subscribe((data: Datatable) => {
      if (data.status !== 200) {
        throw new Error(
          `Couldn't connect to the API Server at ${this.SERVER}:${this.PORT}`
        );
      } else {
        data.columns.map(e => {
          e.time = new Date(e.timeInSeconds);
        });
        this.datatable = { ...data };
        this.changeColumns();
      }
    });
  };
}
