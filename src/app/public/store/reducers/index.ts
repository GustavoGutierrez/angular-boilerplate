import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromLogin from './login.reducer';

export interface PublicState {
  login: fromLogin.LoginState;
}

export const PUBLIC_INITIAL_STATE: PublicState = {
  login: fromLogin.LOGIN_INITIAL_STATE
};

// Public reducers
export const reducers: ActionReducerMap<PublicState> = {
  login: fromLogin.loginReducer
};

// Feature by login module
export const getPublicState = createFeatureSelector<PublicState>(
  'public'
);
