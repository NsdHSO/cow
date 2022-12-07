import { TestBed } from '@angular/core/testing';

import { VariableInterceptor } from './variable.interceptor';

describe('VariableInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      VariableInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: VariableInterceptor = TestBed.inject(VariableInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
