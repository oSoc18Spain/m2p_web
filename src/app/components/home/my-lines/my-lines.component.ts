import { Component, OnInit } from '@angular/core';
import { ConnectApiServices } from '../../../connect-api.service';
import { Line } from '../../../models';

@Component({
  selector: 'app-my-lines',
  templateUrl: './my-lines.component.html',
  styleUrls: ['./my-lines.component.css']
})
export class MyLinesComponent implements OnInit {
  currentLines: Line[];
  lines: number[];

  showLinesToSubscribe: boolean = false;
  constructor(private api: ConnectApiServices) {}

  ngOnInit() {
    this.getSubscriptionsLines();
    this.getLines();
  }

  toogleLinesToSubscribe = () => {
    this.showLinesToSubscribe = !this.showLinesToSubscribe;
  };

  getSubscriptionsLines = () => {
    this.api.getJSON('/api/my_lines').subscribe((data: any) => {
      //fake info
      //data: Subscription
      data = data.my_lines.lines_subscribed;
      //end fake info

      this.currentLines = data;
    });
  };

  getLines = () => {
    this.api.getJSON('/api/lines').subscribe((data: any) => {
      //fake info
      //data: number[]
      data = data.lines;
      //end fake info
      this.lines = data;
    });
  };
  showInfoLines = id => {
    console.log(`click: ${id}`);
  };
}
