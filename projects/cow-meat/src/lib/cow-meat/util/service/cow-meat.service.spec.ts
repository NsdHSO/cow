import {HttpClientModule} from "@angular/common/http";
import {TestBed} from '@angular/core/testing';
import {CowMeatService} from './cow-meat.service';

describe('CowMeatService', () => {
  let service : CowMeatService;
  beforeEach(() => {
    TestBed.configureTestingModule({
                                     imports: [
                                       HttpClientModule,
                                     ],
                                   });
    service = TestBed.inject(CowMeatService);
  });
  it('should be created', () => {
    expect(service)
      .toBeTruthy();
  });
});
