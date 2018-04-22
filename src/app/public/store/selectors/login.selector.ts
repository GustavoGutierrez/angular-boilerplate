import * as fromFeature from '../reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as R from 'ramda';
// selectors
export const getAuthorizationState = createSelector(
  fromFeature.getPublicState,
  (state: fromFeature.PublicState) => state.login.authorization
);

export const getTokenState = createSelector(
  fromFeature.getPublicState,
  (state: fromFeature.PublicState) => {
    return state.login.authorization ? state.login.authorization.idToken : '';
  }
);


export const getAuthUserState = createSelector(
  fromFeature.getPublicState,
  (state: fromFeature.PublicState) => state.login.authorization
);

export const getLoginErrorState = createSelector(
  fromFeature.getPublicState,
  (state: fromFeature.PublicState) => state.login.loginError
);

export const getLoginProgressState = createSelector(
  fromFeature.getPublicState,
  (state: fromFeature.PublicState) => state.login.loginProcess
);
