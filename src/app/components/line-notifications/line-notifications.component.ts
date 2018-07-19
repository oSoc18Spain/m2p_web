import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-notifications',
  templateUrl: './line-notifications.component.html',
  styleUrls: ['./line-notifications.component.css']
})
export class LineNotificationsComponent implements OnInit {
  modalOpen: number = -1;
  modalTitle: string = '';
  constructor() {}

  ngOnInit() {}
  openModal = (id, title) => {
    this.modalTitle = title;
    this.modalOpen = id;
  };
  closeModal = () => {
    this.modalOpen = -1;
  };
}
