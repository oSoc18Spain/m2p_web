import { Component, OnInit } from '@angular/core';

import { ConnectApiServices } from '../../connect-api.service';
import { TypesOfEvents } from '../../models';

@Component({
  selector: 'app-line-info',
  templateUrl: './line-info.component.html',
  styleUrls: ['./line-info.component.css']
})
export class LineInfoComponent implements OnInit {
  not_assigned: TypesOfEvents[] = [];
  assigned_to_me: TypesOfEvents[] = [];

  constructor(private api: ConnectApiServices) {}

  ngOnInit() {
    //this.getEvents();
  }

  getEvents = () => {
    this.api.getJSON('/api/lineschannel').subscribe((data: any) => {      
      if (data.status !== 200) {
        this.api.throwError(data.status)
      } else {
        data.body.map(e => {
          e.time = new Date(e.timeInSeconds);
          if (e.status == 'pending') this.not_assigned.push(e);
          if (e.status == 'in_progress') this.assigned_to_me.push(e);
        });
      }
    });
  };
}
