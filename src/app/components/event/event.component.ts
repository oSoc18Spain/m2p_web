import { Component, OnInit, Input } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Event } from '../../models';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event: Event;

  modalOpen: number;
  constructor(private d:DashboardComponent) {}

  ngOnInit() {}
  openModal = id => {
    this.d.stopInterval();
    this.modalOpen = id;
  };
  closeModal = () => {
    this.d.startInterval();
    this.d.openModel = false;
    this.modalOpen = -1;
  };
}
