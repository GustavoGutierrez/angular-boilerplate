/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenToReqInterceptor } from './tokenToReq.interceptor';

describe('Service: Interceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenToReqInterceptor]
    });
  });

  it('should ...', inject([TokenToReqInterceptor], (service: TokenToReqInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
