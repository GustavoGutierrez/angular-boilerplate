import { Action } from '@ngrx/store';
import { Task } from '@admin/models';

// add todo
export const ADD_TODO = '[Tasking] Add Todo';
export const ADD_TODO_FAIL = '[Tasking] Add Todo Fail';
export const ADD_TODO_SUCCESS = '[Tasking] Add Todo Success';

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: any) {}
}

export class AddTodoFail implements Action {
  readonly type = ADD_TODO_FAIL;
  constructor(public payload: any) {}
}

export class AddTodoSuccess implements Action {
  readonly type = ADD_TODO_SUCCESS;
  constructor(public payload: Task) {}
}

// remove todo
export const REMOVE_TODO = '[Tasking] Remove Todo';
export const REMOVE_TODO_FAIL = '[Tasking] Remove Todo Fail';
export const REMOVE_TODO_SUCCESS = '[Tasking] Remove Todo Success';

 export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public payload: any) {}
}

export class RemoveTodoFail implements Action {
  readonly type = REMOVE_TODO_FAIL;
  constructor(public payload: any) {}
}

export class RemoveTodoSuccess implements Action {
  readonly type = REMOVE_TODO_SUCCESS;
  constructor(public payload: Task) {}
}

// clear todo
export const CLEAR_TODO = '[Tasking] Clear Todo';
export const CLEAR_TODO_FAIL = '[Tasking] Clear Todo Fail';
export const CLEAR_TODO_SUCCESS = '[Tasking] Clear Todo Success';

export class ClearTodo implements Action {
  readonly type = CLEAR_TODO;
  constructor(public payload?: any) {}
}

export class ClearTodoFail implements Action {
  readonly type = CLEAR_TODO_FAIL;
  constructor(public payload?: any) {}
}

export class ClearTodoSuccess implements Action {
  readonly type = CLEAR_TODO_SUCCESS;
  constructor(public payload?: any) {}
}

// toggle todo
export const TOGGLE_TODO = '[Tasking] Toggle Todo';

export class ToggleTodo implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public payload?: any) {}
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type TaskingActions =
| AddTodo
| AddTodoFail
| AddTodoSuccess
| RemoveTodo
| RemoveTodoFail
| RemoveTodoSuccess
| ClearTodo
| ClearTodoFail
| ClearTodoSuccess
| ToggleTodo;
