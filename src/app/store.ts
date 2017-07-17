import { combineReducers } from 'redux';
import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/store';

export interface IAppState {
  tasking: ITaskingState;
}

export const INITIAL_STATE: IAppState = {
  tasking: TASKING_INITIAL_STATE
}

export const rootReducer:any = combineReducers({
  tasking: taskingReducer
});
