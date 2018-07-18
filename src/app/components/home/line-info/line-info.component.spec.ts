import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineInfoComponent } from './line-info.component';

describe('LineInfoComponent', () => {
  let component: LineInfoComponent;
  let fixture: ComponentFixture<LineInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
