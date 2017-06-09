import { tassign } from 'tassign'; 
import { combineReducers } from 'redux'; 
import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/store';
import { IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer } from './messaging/store';

export interface IAppState {
  tasking: ITaskingState;
  messaging: IMessagingState;
}

export const INITIAL_STATE: IAppState = { 
  tasking: TASKING_INITIAL_STATE,
  messaging: MESSAGING_INITIAL_STATE
}

export const rootReducer:any = combineReducers({
  tasking: taskingReducer,
  messaging: messagingReducer
});