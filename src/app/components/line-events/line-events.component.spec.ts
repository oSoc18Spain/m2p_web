import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineEventsComponent } from './line-events.component';

describe('LineEventsComponent', () => {
  let component: LineEventsComponent;
  let fixture: ComponentFixture<LineEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
