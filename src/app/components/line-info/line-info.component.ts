import { Component, OnInit } from '@angular/core';

import { ConnectApiServices } from '../../connect-api.service';
import { TypesOfEvents } from '../../models';
import { MyLinesComponent } from '../my-lines/my-lines.component';
import { CurrentLineService } from '../my-lines/current-line.service';

@Component({
  selector: 'app-line-info',
  templateUrl: './line-info.component.html',
  styleUrls: ['./line-info.component.css']
})
export class LineInfoComponent implements OnInit {
  not_assigned: TypesOfEvents[] = [];
  assigned_to_me: TypesOfEvents[] = [];
  currentLine: number;
  constructor(
    private api: ConnectApiServices,
    private myLines: MyLinesComponent,
    private currentLineService: CurrentLineService
  ) {}

  ngOnInit() {
    this.getEvents();
    this.currentLineService.currentLine.subscribe(n => (this.currentLine = n));
  }

  isSelected = () => {
    console.log(this.myLines.currentLine);

    return this.myLines.currentLine;
  };

  getEvents = () => {
    //'/api/lineschannel'
    this.api.getJSON('/api').subscribe((data: any) => {
      //fake
      data = data.event;

      if (data.status !== 200) {
        this.api.throwError(data.status);
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
