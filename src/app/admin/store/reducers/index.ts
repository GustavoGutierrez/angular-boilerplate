import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTasking from './tasking.reducer';


export interface AdminState {
  tasking: fromTasking.TaskingState;
}

export const APP_INITIAL_STATE: AdminState = {
  tasking: fromTasking.TASKING_INITIAL_STATE
}

// admin reducers
export const reducers: ActionReducerMap<AdminState> = {
  tasking: fromTasking.taskingReducer
};

// feature
export const getAdminState = createFeatureSelector<AdminState>(
  'admin'
);
