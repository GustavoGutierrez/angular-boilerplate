import * as fromFeature from '../reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

// selectors
export const geTaskingState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.State) => state.tasking.todos
);

export const getLastUpdateState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.State) => state.tasking.lastUpdate
);
