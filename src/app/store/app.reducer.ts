import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/tasking.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  tasking: ITaskingState;
}

export const APP_INITIAL_STATE: State = {
  tasking: TASKING_INITIAL_STATE
}

export const rootReducer: ActionReducerMap<State> = {
  tasking: taskingReducer
};
