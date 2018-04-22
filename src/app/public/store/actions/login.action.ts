import { Action } from '@ngrx/store';
import { LoginForm, Auth } from '../../models';

export const LOGIN_SIGNIN = '[Login] signin';
export const LOGIN_SIGNIN_ERROR = '[Login] signin error';
export const LOGIN_SIGNIN_SUCCESS = '[Login] signin success';

export class Signin implements Action {
  readonly type = LOGIN_SIGNIN;
  constructor(public payload: LoginForm) {}
}

export class SigninError implements Action {
  readonly type = LOGIN_SIGNIN_ERROR;
  constructor(public payload: any) {}
}

export class SigninSuccess implements Action {
  readonly type = LOGIN_SIGNIN_SUCCESS;
  constructor(public payload: Auth) {}
}

export type LoginActions = SigninError | SigninSuccess | Signin;
