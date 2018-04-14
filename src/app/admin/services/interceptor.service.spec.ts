/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterceptorService } from './interceptor.service';

describe('Service: Interceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptorService]
    });
  });

  it('should ...', inject([InterceptorService], (service: InterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
