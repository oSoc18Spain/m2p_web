import { Component, OnInit } from '@angular/core';
import { ConnectApiServices } from '../../connect-api.service';
import { Datatable } from '../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datatable: Datatable = {
    status: 0,
    columns: []
  };

  constructor(private api: ConnectApiServices) {}

  ngOnInit() {
    this.getDashboardSubscription();
  }

  changeColumns = () => {
    //Calculate the number of columns and it changes the CSS
    const ncolumns = this.datatable.columns.length;
    document
      .getElementById('table')
      .style.setProperty('grid-template-columns', `repeat(${ncolumns}, 1fr)`);
      console.log(this.datatable);
      
  };

  getDashboardSubscription = () => {
    this.api.getJSON('/api/dashboard').subscribe((data: any) => {
      //fake info
      //data: Datatable
      data = data.dashboard;
      //end fake info
      if (data.status !== 200) {
        throw new Error(
          `Couldn't connect to the API Server at ${this.api.getServer()}:${this.api.getPort()}`
        );
      } else {
        data.columns.map(e => {
          e.event_list.map(ee => {
            ee.time = new Date(ee.timeInSeconds);
          })
        });
        this.datatable = { ...data };
        this.changeColumns();
      }
    });
  };
}
