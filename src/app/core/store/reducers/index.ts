import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as fromRouterReducers from './router.reducer';
import * as fromLoginReducers from './login.reducer';
import * as fromTaskingReducers from './tasking.reducer';

export * from './router.reducer';

// Global Sate Application - <all reduces>
export interface State {
  login: fromLoginReducers.LoginState;
  routerReducer: fromRouter.RouterReducerState<fromRouterReducers.RouterStateUrl>;
  tasking: fromTaskingReducers.TaskingState;
}

export const CORE_INITIAL_STATE: State = {
  login: fromLoginReducers.LOGIN_INITIAL_STATE,
  routerReducer: null,
  tasking: fromTaskingReducers.TASKING_INITIAL_STATE
};


export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
  login: fromLoginReducers.loginReducer,
  tasking: fromTaskingReducers.taskingReducer
};

// Feature by core module

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<fromRouterReducers.RouterStateUrl>
>('routerReducer');

export const getCoreState = createFeatureSelector<State>(
  'core'
);
