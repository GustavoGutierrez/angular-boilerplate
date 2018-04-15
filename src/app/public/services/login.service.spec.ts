/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('Service: Login', () => {
  let injector: TestBed;
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });

    injector = getTestBed();
    service = injector.get(new LoginService(null));
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#signin', () => {
    it('should return an Observable<User[]>', () => {
      const dummyResponse = { username: 'john', firstname: 'John', lastname: 'Doe' };

      service.signin('john.doe@test.com', '123456').subscribe(login => {
       // expect(users.length).toBe(2);
        expect(login).toEqual(dummyResponse);
      });

     /* const req = httpMock.expectOne(`${service.baseUrl}/login`);
      expect(req.request.method).toBe("POST");
      req.flush(dummyResponse);*/
    });
  });
});
