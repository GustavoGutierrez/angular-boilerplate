import { Injectable } from '@angular/core';
import { LoginForm } from './login.model';

@Injectable()
export class LoginService {

  constructor() { }

  authorize(form:LoginForm){
    if(form.password == 'admin' && form.username == 'admin') return true;

    return false;
  }
}
