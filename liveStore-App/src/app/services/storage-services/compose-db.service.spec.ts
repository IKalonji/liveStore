import { TestBed } from '@angular/core/testing';

import { ComposeDbService } from './compose-db.service';

describe('ComposeDbService', () => {
  let service: ComposeDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposeDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
