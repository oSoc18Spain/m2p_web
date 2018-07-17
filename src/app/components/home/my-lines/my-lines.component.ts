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
  my_lines_id: number[] = [];
  showLinesToSubscribe: boolean = false;
  needsToUpdate: boolean = false;
  constructor(private api: ConnectApiServices) {}

  ngOnInit() {
    this.getLines();
    this.getSubscriptionsLines();
  }

  toogleLinesToSubscribe = () => {
    this.showLinesToSubscribe = !this.showLinesToSubscribe;
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

  setMyLines = () => {
    this.my_lines_id = this.currentLines.map(l => l.id);
  };

  updateLines = id => {
    this.my_lines_id.indexOf(id) < 0
      ? this.my_lines_id.push(id)
      : this.my_lines_id.splice(this.my_lines_id.indexOf(id), 1);
    console.log(this.my_lines_id);
    this.needsToUpdate = true;
  };

  getSubscriptionsLines = () => {
    this.api.getJSON('/api/my_lines').subscribe((data: any) => {
      //fake info
      //data: Subscription
      data = data.my_lines.lines_subscribed;
      //end fake info

      this.currentLines = data;
      this.setMyLines();
    });
  };

  showInfoLines = id => {
    console.log(`click: ${id}`);
  };
}
