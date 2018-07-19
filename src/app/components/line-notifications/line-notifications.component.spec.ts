import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineNotificationsComponent } from './line-notifications.component';

describe('LineNotificationsComponent', () => {
  let component: LineNotificationsComponent;
  let fixture: ComponentFixture<LineNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
