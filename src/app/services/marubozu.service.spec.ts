import { TestBed } from '@angular/core/testing';

import { MarubozuService } from './marubozu.service';

describe('MarubozuService', () => {
  let service: MarubozuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarubozuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
