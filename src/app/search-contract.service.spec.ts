import { TestBed } from '@angular/core/testing';

import { SearchContractService } from './search-contract.service';

describe('SearchContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchContractService = TestBed.get(SearchContractService);
    expect(service).toBeTruthy();
  });
});
