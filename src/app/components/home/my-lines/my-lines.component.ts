import { Component, OnInit } from '@angular/core';

interface Line {
  id: number;
  name: string;
  n_alerts: number;
}
@Component({
  selector: 'app-my-lines',
  templateUrl: './my-lines.component.html',
  styleUrls: ['./my-lines.component.css']
})
export class MyLinesComponent implements OnInit {
  lines: Line[] = [
    {
      id: 1,
      name: 'Línea 1',
      n_alerts: 12
    },
    {
      id: 2,
      name: 'Línea 2',
      n_alerts: 0
    },
    {
      id: 3,
      name: 'Línea 3',
      n_alerts: 3
    }
  ];
  constructor() {}

  ngOnInit() {}

  showInfoLines = id => {
    console.log(`click: ${id}`);
  };
}
