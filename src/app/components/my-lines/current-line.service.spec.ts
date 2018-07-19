import { TestBed, inject } from '@angular/core/testing';

import { CurrentLineService } from './current-line.service';

describe('CurrentLineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentLineService]
    });
  });

  it('should be created', inject([CurrentLineService], (service: CurrentLineService) => {
    expect(service).toBeTruthy();
  }));
});
