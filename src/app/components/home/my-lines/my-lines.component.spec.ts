import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLinesComponent } from './my-lines.component';

describe('MyLinesComponent', () => {
  let component: MyLinesComponent;
  let fixture: ComponentFixture<MyLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
