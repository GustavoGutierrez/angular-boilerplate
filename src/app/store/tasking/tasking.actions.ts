import { Action } from '@ngrx/store';

export enum TaskingActionTypes {
  add = '[Tasking] Add',
  remove = '[Tasking] Remove',
  clear = '[Tasking] Clear',
  toggle = '[Tasking] Toggle',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class AddTodoAction implements Action {
  readonly type = TaskingActionTypes.add;
  constructor(public payload: any) {}
}

export class RemoveTodoAction implements Action {
  readonly type = TaskingActionTypes.remove;
  constructor(public payload: number) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TaskingActionTypes.toggle;
  constructor(public payload: number) {}
}

export class ClearTodoAction implements Action {
  readonly type = TaskingActionTypes.clear;
  constructor(public payload?: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type TaskingActions =
| AddTodoAction
| RemoveTodoAction
| ToggleTodoAction
| ClearTodoAction;
