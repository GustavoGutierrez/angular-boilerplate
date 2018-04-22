import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { LoginService } from '../../services/login.service';
import * as actions from '../actions';
import { LoginForm } from '../../models/login-form.model';
import { Auth } from '../../models/auth.model';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private loginService: LoginService
  ) { }

  @Effect()
  loginSingin$ = this.actions$.ofType(actions.LOGIN_SIGNIN).pipe(
    map((action: actions.Signin) => action.payload),
    switchMap((login: LoginForm) => {
      const { password, email } = login;
      return this.loginService
        .signin(email, password)
        .pipe(
          map((auth: Auth) => new actions.SigninSuccess(auth)),
          catchError(error => of(new actions.SigninError(error)))
        );
    })
  );

  @Effect({ dispatch: false })
  loginSinginSuccess$ = this.actions$.ofType(actions.LOGIN_SIGNIN_SUCCESS).pipe(tap(() => {
    return this.router.navigate(['admin']);
  }));
}
