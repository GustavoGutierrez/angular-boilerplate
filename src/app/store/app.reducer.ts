import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/tasking.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  tasking: ITaskingState;
}

export const APP_INITIAL_STATE: AppState = {
  tasking: TASKING_INITIAL_STATE
}

export const rootReducer: ActionReducerMap<AppState> = {
  tasking: taskingReducer
};
