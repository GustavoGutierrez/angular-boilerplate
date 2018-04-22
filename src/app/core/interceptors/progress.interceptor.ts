import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ProgressBarService} from '../services/progress-bar.service';

export class ProgressInterceptor implements HttpInterceptor {
  constructor(private progressBarService: ProgressBarService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent |
  HttpHeaderResponse |
  HttpProgressEvent |
  HttpResponse<any> |
  HttpUserEvent<any>> {
    console.log('Interceptor');
    this.progressBarService.increase();
    return next
      .handle(req)
      .do(event => {
        if (event instanceof HttpResponse) {
         this.progressBarService.decrease();
        }
      });
  }
}
