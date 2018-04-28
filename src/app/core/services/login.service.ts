import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "@environments/environment";
import { Auth } from "@public/models";

@Injectable()
export class LoginService {
  public baseUrl: string = environment.API_URL;

  private api_login = environment.API_LOGIN;

  constructor(private http: HttpClient) {}

  signin(email: string, password: string) {

    return this.http.post<Auth>(`${this.api_login}`, {
      email,
      password,
      returnSecureToken: true
    });
  }
}
