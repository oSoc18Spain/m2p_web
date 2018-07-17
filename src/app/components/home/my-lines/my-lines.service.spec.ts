import { TestBed, inject } from '@angular/core/testing';

import { MyLinesService } from './my-lines.service';

describe('MyLinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyLinesService]
    });
  });

  it('should be created', inject([MyLinesService], (service: MyLinesService) => {
    expect(service).toBeTruthy();
  }));
});
