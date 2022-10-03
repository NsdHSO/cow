import { TestBed } from '@angular/core/testing';

import { GetReportingDataResolver } from './get-reporting-data.resolver';

describe('GetReportingDataResolver', () => {
  let resolver: GetReportingDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetReportingDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
