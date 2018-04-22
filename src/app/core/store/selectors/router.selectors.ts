import { createSelector } from "@ngrx/store";
import { getRouterState, RouterStateUrl } from "../reducers";


/**
 * Selectors
 */
export const getRouterParams = createSelector(
  getRouterState,
  (routerData: {state:RouterStateUrl, navigationId: number}) => {
    return routerData.state.params;
  }
);

export const getRouterQueryParams = createSelector(
  getRouterState,
  (routerData: {state:RouterStateUrl, navigationId: number}) => {
    return routerData.state.queryParams;
  }
);

export const getRouterCurrentUrl = createSelector(
  getRouterState,
  (routerData: {state:RouterStateUrl, navigationId: number}) => {
    return routerData.state.url;
  }
);

export const getRouterAllState = createSelector(
  getRouterState,
  (routerData: {state:RouterStateUrl, navigationId: number}) => {
    return routerData.state;
  }
);
