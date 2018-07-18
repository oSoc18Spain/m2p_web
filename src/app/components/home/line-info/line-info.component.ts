import { Component, OnInit } from '@angular/core';

import { ConnectApiServices } from '../../../connect-api.service';
import { TypesOfEvents } from '../../../models';

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
    this.getEvents();
  }

  getEvents = () => {
    this.api.getJSON('/api').subscribe((data: any) => {
      //fake info
      //data: EventsInLine
      data = data.event;
      //end fake info

      if (data.status !== 200) {
        throw new Error(
          `Couldn't connect to the API Server at ${this.api.getServer()}:${this.api.getPort()}`
        );
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
