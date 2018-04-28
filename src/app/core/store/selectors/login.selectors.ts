import * as fromFeature from '../reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as R from 'ramda';

// selectors
export const getAuthorizationState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.State) => state.login ? state.login.authorization : ''
);

export const getTokenState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.State) => {
    return state.login.authorization ? state.login.authorization.idToken : '';
  }
);

export const getAuthUserState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.State) => state.login ? state.login.authorization : ''
);

export const getLoginErrorState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.State) =>  state.login ? state.login.loginError : ''
);

export const getLoginProgressState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.State) => state.login ? state.login.loginProcess : ''
);
