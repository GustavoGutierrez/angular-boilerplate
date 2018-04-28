import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import * as publicActions from '@public/store/actions';
import * as fromPublicStore from '@public/store';
import * as fromSelectors from '@public/store/selectors';
import * as R from 'ramda';
/**
 * Servicio interceptor de peticiones http, este servicio intercepta todas las peticiones realizadas
 * y le agrega la autorización
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private token$: Observable<string>;
  private authorization: string = '';

  constructor(
    private storePublic: Store<fromPublicStore.PublicState>,
  ) {
    this.token$ = storePublic.select(fromSelectors.getTokenState);
    this.token$.subscribe(token => {
      this.authorization = token;
    });
  }
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
      'Authorization': `Bearer ${this.authorization}`
    };

    // clone the request
    const clone = req.clone({ setHeaders: headers });

    // pass it to the next interceptor
    return next.handle(clone).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 || err.status === 403) {
         window.location.href = location.protocol + '//' + location.host;
        }
      }
    });
  }

}
