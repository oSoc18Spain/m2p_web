import { Component, OnInit } from '@angular/core';

import {MatTableModule} from '@angular/material/table';

export interface Event {
  title: string;
  description: string;
  status: string;
  time: Date;
  id: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  event_list: Event[] = [
    {
      title:"Evento 1",
      description: "Es una descripción",
      status:"pending",
      time: new Date(),
      id: 22
    },
    {
      title:"Evento 2",
      description: "Es una descripción",
      status:"pending",
      time: new Date(),
      id: 23
    },
    {
      title:"Evento 2",
      description: "Es una descripción",
      status:"pending",
      time: new Date(),
      id: 23
    }
  ];
  worker1: Event[] = [
    {
      title:"Evento 5",
      description: "Es una descripción",
      status:"in_progress",
      time: new Date(),
      id: 29
    }
  ];
  done_list: Event[] = [
    {
      title:"Evento 3",
      description: "Es una descripción",
      status:"done",
      time: new Date(),
      id: 25
    },
    {
      title:"Evento 4",
      description: "Es una descripción",
      status:"done",
      time: new Date(),
      id: 27
    }
  ];

  datatable = {
    status:200,
    columns:[
      {
        name:"no_assigment",
        event_list:this.event_list
      },
      {
        name:"worker1",
        event_list:this.worker1
      },
      {
        name:"done",
        event_list:this.done_list
      }
    ]
  }
  
  constructor() {
  }
  ngOnInit() {
    //Calculate the number of columns and it changes the CSS
    const ncolumns = this.datatable.columns.length;
    document.getElementById('table').style.setProperty('gridTemplateColumns', `repeat(${ncolumns}, 1fr)`);
  }

}
