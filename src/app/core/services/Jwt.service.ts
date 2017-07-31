import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class JwtService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    // build the headers you want
    const headers = {
      'Authorization': `Bearer secretJWTToken`
    };

    // clone the request
    const clone = req.clone({ setHeaders: headers });
    console.log('interceptor....')

    // pass it to the next interceptor
    return next.handle(clone);
  }

}
