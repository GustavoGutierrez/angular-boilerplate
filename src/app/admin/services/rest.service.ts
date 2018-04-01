import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
/**
 * Base service class for API calls
 */
export abstract class RestService {

  protected baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  protected get headers(): { headers: HttpHeaders} {
    const token: string = sessionStorage.getItem('token');
    const headers = new HttpHeaders();
    headers.set('token', token)
    return { headers };
  }

  protected get(relativeUrl: string): Observable<any> {
    return this.http.get(this.baseUrl + relativeUrl, this.headers);
  }

  protected post(relativeUrl: string, data: any) {
    return this.http.post(this.baseUrl + relativeUrl, data, this.headers);
  }

  protected patch(relativeUrl: string, data: any) {
    return this.http.patch(this.baseUrl + relativeUrl, data, this.headers);
  }

  protected put(relativeUrl: string, data: any) {
    return this.http.put(this.baseUrl + relativeUrl, data, this.headers);
  }

  protected del(relativeUrl: string) {
    return this.http.delete(this.baseUrl + relativeUrl, this.headers);
  }

}
