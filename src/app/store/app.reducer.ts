import { combineReducers } from 'redux';
import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/tasking.reducer';

export interface IAppState {
  tasking: ITaskingState;
}

export const APP_INITIAL_STATE: IAppState = {
  tasking: TASKING_INITIAL_STATE
}

export const rootReducer: any = combineReducers({
  tasking: taskingReducer
});
