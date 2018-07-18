import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../models';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() card: Event;

  constructor() {}

  ngOnInit() {
    console.log(this.card);
  }
}
