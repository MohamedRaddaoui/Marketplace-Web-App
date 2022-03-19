import { TestBed } from '@angular/core/testing';

import { RAuctionService } from './r-auction.service';

describe('RAuctionService', () => {
  let service: RAuctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RAuctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
