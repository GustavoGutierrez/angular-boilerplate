import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class LoginService {
  private baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  signin(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, {
      email,
      password
    });
  }
}
