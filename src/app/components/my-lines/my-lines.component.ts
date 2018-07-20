import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectApiServices } from '../../connect-api.service';
import { interval } from 'rxjs/observable/interval';
import { Line } from '../../models';
import { HeaderComponent } from '../header/header.component';
import { CurrentLineService } from './current-line.service';
@Component({
  selector: 'app-my-lines',
  templateUrl: './my-lines.component.html',
  styleUrls: ['./my-lines.component.css']
})
export class MyLinesComponent implements OnInit {
  currentLines: Line[];
  lines: Line[] = [];
  selectedLines: Line[] = [];
  showLinesToSubscribe: boolean = false;
  needsToUpdate: boolean = false;
  currentUrl: string;
  currentLine: number;

  constructor(
    private api: ConnectApiServices,
    private route: Router,
    private header: HeaderComponent,
    private currentLineService: CurrentLineService
  ) {
    this.currentUrl = this.route.url.substring(1);
  }

  ngOnInit() {
    this.getLines();
    interval(1000).subscribe(() => this.getSubscriptionsLines());
    
    
    this.setAllLines();
  }

  setAllLines = () => {
    if (this.currentLines != undefined && this.currentLines != undefined) {
      this.selectedLines = this.currentLines;
      this.needsToUpdate = false;
    }
  };
  toggleCheck = id => {
    this.selectedLines.findIndex(e => e.id == id) < 0
      ? this.selectedLines.push(
          this.lines.find(e => {
            return e.id === id;
          })
        )
      : this.currentLines.splice(
        this.currentLines.findIndex(e => {return e.id == 4}),1);
    this.needsToUpdate = true;
  };

  isSelected = (id: number): boolean => {
    let elem = this.selectedLines.find(e => {
      return e.id === id;
    });
    return elem !== undefined;
  };

  removeLine = (id:number) => {
    (this.currentLineService.currentLine.subscribe(idLine => {
      if(id === idLine){
        this.currentLineService.changeLine(-1);
        this.currentLines.splice(
          this.currentLines.findIndex(e => {return e.id == 4}),1)
      }
    }));
}

  toogleLinesToSubscribe = (deleteChanges?: boolean) => {
    if (deleteChanges) this.setAllLines();
    this.showLinesToSubscribe = !this.showLinesToSubscribe;
  };

  updateMyLines = () => {
    this.showLinesToSubscribe = false;

    let obj = {
      user_id: this.header.users.id_employee,
      linneschannel_id: this.showLinesToSubscribe
    };
  };

  getLines = () => {
    this.api.getJSON('/api/lineschannel').subscribe((data: Line[]) => {
      this.lines = data;
    });
  };

  getSubscriptionsLines = () => {    
    let id = this.header.id;
    this.api.getJSON(`/api/mylineschannels/${id}`).subscribe((data: any) => {            
      let lines = [];
      let ids = data.map(e => e.id);

      this.lines.map(e => {
        if (ids.includes(e.id)) {
          e.n_alerts = Math.round(Math.random() * 8)
          lines.push(e);
        }
      });
      this.currentLines = lines;
    });
  };

  showInfoLines = id => {
    this.currentLineService.changeLine(id);
  };
}
