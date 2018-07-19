import { Component, OnInit } from '@angular/core';
import { ConnectApiServices } from '../../connect-api.service';
import { Tasks } from '../../models';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.css']
})
export class CreateEventFormComponent implements OnInit {
  tasks: Tasks[];
  lines: number[];
  machines: number[] = [];

  constructor(private api: ConnectApiServices) {
    this.getLines();
    this.getTasks();
  }

  getTasks = () => {
    //'/tasks'
    this.api.getJSON('/api').subscribe((data: any) => {
      //fake info
      //data: number[]
      data = data.tasks;
      //end fake info
      this.tasks = data;
      
    });
  }

  getLines = () => {
    //'/api/lines'
    this.api.getJSON('/api').subscribe((data: any) => {
      //fake info
      //data: number[]
      data = data.lines;
      //end fake info
      this.lines = data.sort();

      
      this.getMachines();      
    });
  };

  getMachines = () => {
    this.api.getJSON('/api').subscribe((data: any) => {
      //fake info
      //data: number[]
      data = data.machines;
      //end fake info
      this.machines = data.sort();      
    });
  }

  ngOnInit() {
  }

}
