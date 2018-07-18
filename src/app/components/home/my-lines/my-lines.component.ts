import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectApiServices } from '../../../connect-api.service';
import { Line } from '../../../models';

@Component({
  selector: 'app-my-lines',
  templateUrl: './my-lines.component.html',
  styleUrls: ['./my-lines.component.css']
})
export class MyLinesComponent implements OnInit {
  currentLines: Line[];
  lines: number[] = [];
  my_lines_id: number[] = [];
  showLinesToSubscribe: boolean = false;
  needsToUpdate: boolean = false;
  currentUrl: string;

  constructor(private api: ConnectApiServices, private route: Router) {
    this.currentUrl = this.route.url.substring(1);
  }

  ngOnInit() {
    this.getLines();
    this.getSubscriptionsLines();
    this.setAllLines();
  }

  setAllLines = () => {
    if (this.currentLines != undefined && this.currentLines != undefined) {
      this.my_lines_id = this.currentLines.map(e => e.id);
      this.needsToUpdate = false;
    }
  };
  toggleCheck = id => {
    this.my_lines_id.indexOf(id) < 0
      ? this.my_lines_id.push(id)
      : this.my_lines_id.splice(this.my_lines_id.indexOf(id), 1);
    this.needsToUpdate = true;
  };

  toogleLinesToSubscribe = (deleteChanges?: boolean) => {
    if (deleteChanges) this.setAllLines();
    this.showLinesToSubscribe = !this.showLinesToSubscribe;
  };

  getLines = () => {
    //'/api/lines'
    this.api.getJSON('/api').subscribe((data: any) => {
      //fake info
      //data: number[]
      data = data.lines;
      //end fake info
      this.lines = data;
    });
  };

  getSubscriptionsLines = () => {
    //'/api/my_lines'
    this.api.getJSON('/api').subscribe((data: any) => {
      //fake info
      //data: Subscription
      data = data.my_lines.lines_subscribed;
      //end fake info

      this.currentLines = data;
    });
  };

  showInfoLines = id => {
    console.log(`click: ${id}`);
  };
}
