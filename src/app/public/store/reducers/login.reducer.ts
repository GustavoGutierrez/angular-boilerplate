import { Action, createFeatureSelector } from '@ngrx/store';
import { tassign } from 'tassign';
import * as actions from '../actions';
import { Auth, LoginForm } from '../../models';
import { HttpErrorResponse } from '@angular/common/http';

export interface LoginState {
  authorization: Auth;
  loginProcess: string;
  loginError: HttpErrorResponse;
}

export const LOGIN_INITIAL_STATE: LoginState = {
  authorization: null,
  loginProcess: null,
  loginError: null
};

class LoginActions {

  constructor(private state: LoginState, private action: actions.LoginActions) { }

  signin() {
   // const payload = this.action.payload;
    return tassign(this.state, {
      loginProcess: 'Proccess login...'
    });
  }

  success() {
    const payload: Auth = this.action.payload;

    return tassign(this.state, {
      authorization: payload,
      loginProcess: null,
      loginError: null
    });
  }

  error() {
    const payload: HttpErrorResponse = this.action.payload;

    return tassign(this.state, {
      loginError: payload,
    });
  }

}

export function loginReducer(state: LoginState = LOGIN_INITIAL_STATE, action: actions.LoginActions): LoginState {

  const loginActions: LoginActions = new LoginActions(state, action);

  switch (action.type) {
    case actions.LOGIN_SIGNIN: {
      return loginActions.signin();
    }

    case actions.LOGIN_SIGNIN_SUCCESS: {
      return loginActions.success();
    }

    case actions.LOGIN_SIGNIN_ERROR: {
      return loginActions.error();
    }

    default: {
      return state;
    }
  }
}
