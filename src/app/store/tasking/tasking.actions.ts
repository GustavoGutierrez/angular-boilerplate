import { Action } from '@ngrx/store';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: Object) {}
}
