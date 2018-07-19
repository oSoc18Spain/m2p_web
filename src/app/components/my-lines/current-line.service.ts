import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class CurrentLineService {
  private lineSource = new BehaviorSubject<number>(-1);
  currentLine = this.lineSource.asObservable();

  constructor() {}

  changeLine(id: number) {
    this.lineSource.next(id);
  }
}
