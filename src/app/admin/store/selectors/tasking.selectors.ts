import * as fromFeature from '../reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

// selectors
export const geTaskingState = createSelector(
  fromFeature.getAdminState,
  (state: fromFeature.AdminState) => state.tasking.todos
);

export const getLastUpdateState = createSelector(
  fromFeature.getAdminState,
  (state: fromFeature.AdminState) => state.tasking.lastUpdate
);
