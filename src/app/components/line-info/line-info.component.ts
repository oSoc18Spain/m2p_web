import { Component, OnInit } from '@angular/core';

import { MyLinesComponent } from '../my-lines/my-lines.component';
import { CurrentLineService } from '../my-lines/current-line.service';

@Component({
  selector: 'app-line-info',
  templateUrl: './line-info.component.html',
  styleUrls: ['./line-info.component.css']
})
export class LineInfoComponent implements OnInit {
  currentLine: number;
  currentTab: string = 'events';

  constructor(
    private myLines: MyLinesComponent,
    private currentLineService: CurrentLineService
  ) {}

  ngOnInit() {
    this.currentLineService.currentLine.subscribe(n => (this.currentLine = n));
  }

  changeTab = tab => {
    this.currentTab = tab;
  };

  isSelected = () => {
    return this.myLines.currentLine;
  };
}
