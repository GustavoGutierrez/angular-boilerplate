import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ProgressBarService} from '@core/services/progress-bar.service';
import 'rxjs/add/operator/do';
export class ProgressInterceptor implements HttpInterceptor {
  constructor(private progressBarService: ProgressBarService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent |
  HttpHeaderResponse |
  HttpProgressEvent |
  HttpResponse<any> |
  HttpUserEvent<any>> {
    this.progressBarService.increase();
    return next
      .handle(req)
      .do(event => {
        if (event instanceof HttpResponse) {
         this.progressBarService.decrease();
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.progressBarService.decrease();
        }
      });
  }
}
