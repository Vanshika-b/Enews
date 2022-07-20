import { TestBed } from '@angular/core/testing';

import { EnewsapiService } from './enewsapi.service';

describe('EnewsapiService', () => {
  let service: EnewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
