import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
/**
 * Base service class for API calls
 */
export abstract class BaseService {

  protected baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  protected serialize(obj: any): string {
    const str = [];
    for (let p in obj) {
      if (typeof (obj[p]) === 'object') {
        str.push(encodeURIComponent(p) + '=' + JSON.stringify(obj[p]));
      } else {
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
      }
    }
    return str.join('&');
  }

  protected get(relativeUrl: string, params?: object): Observable<any> {
    let endpoint = `${this.baseUrl}${relativeUrl}`;
    if (params) {
      endpoint = `${endpoint}?${this.serialize(params)}`;
    }
    return this.http.get(endpoint);
  }

  protected post(relativeUrl: string, data: any) {
    return this.http.post(`${this.baseUrl}${relativeUrl}`, data);
  }

  protected patch(relativeUrl: string, data: any) {
    return this.http.patch(`${this.baseUrl}${relativeUrl}`, data);
  }

  protected put(relativeUrl: string, data: any) {
    return this.http.put(`${this.baseUrl}${relativeUrl}`, data);
  }

  protected del(relativeUrl: string) {
    return this.http.delete(`${this.baseUrl}${relativeUrl}`);
  }

}
