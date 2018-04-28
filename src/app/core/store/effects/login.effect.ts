import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { LoginService } from '@core/services';
import * as fromActions from '../actions';
import { LoginForm, Auth } from '@public/models';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private loginService: LoginService
  ) { }

  @Effect()
  loginSingin$ = this.actions$.ofType(fromActions.LOGIN_SIGNIN).pipe(
    map((action: fromActions.Signin) => action.payload),
    switchMap((login: LoginForm) => {
      const { password, email } = login;
      return this.loginService
        .signin(email, password)
        .pipe(
          map((auth: Auth) => new fromActions.SigninSuccess(auth)),
          catchError(error => of(new fromActions.SigninError(error)))
        );
    })
  );

  @Effect({ dispatch: false })
  loginSinginSuccess$ = this.actions$.ofType(fromActions.LOGIN_SIGNIN_SUCCESS).pipe(tap(() => {
    return this.router.navigate(['admin']);
  }));
}
