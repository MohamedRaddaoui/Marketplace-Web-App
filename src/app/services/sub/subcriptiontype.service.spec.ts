import { TestBed } from '@angular/core/testing';

import { SubcriptiontypeService } from './subcriptiontype.service';

describe('SubcriptiontypeService', () => {
  let service: SubcriptiontypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcriptiontypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
