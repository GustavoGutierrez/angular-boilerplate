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
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Servicio interceptor de peticiones http, este servicio intercepta todas las peticiones realizadas y le agrega la autorización
 */
@Injectable()
export class InterceptorService implements HttpInterceptor {
  /**
   * Método ejecutado con cada petición Http
   * @param req HttpRequest
   * @param next HttpHandler
   * @return Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent |
    HttpHeaderResponse |
    HttpProgressEvent |
    HttpResponse<any> |
    HttpUserEvent<any>> {
    // build the headers you want
    const headers = {
      'Authorization': `Bearer secretJWTToken`
    };

    // clone the request
    const clone = req.clone({ setHeaders: headers });
    console.log('interceptor....');

    // pass it to the next interceptor
    return next.handle(clone);
  }

}
