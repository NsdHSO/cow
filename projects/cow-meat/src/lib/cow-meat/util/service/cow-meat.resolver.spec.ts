import {HttpClientModule} from "@angular/common/http";
import { TestBed } from '@angular/core/testing';

import { CowMeatResolver } from './cow-meat.resolver';

describe('CowMeatResolver', () => {
  let resolver: CowMeatResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
                                     imports: [
                                       HttpClientModule,
                                     ],
                                   });
    resolver = TestBed.inject(CowMeatResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
