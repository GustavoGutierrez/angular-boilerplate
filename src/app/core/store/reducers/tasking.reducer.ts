import { Action } from '@ngrx/store';
import { tassign } from 'tassign';
import * as fromActions from '../actions';

export interface TaskingState {
  todos: any[];
  lastUpdate: Date;
}

export const TASKING_INITIAL_STATE: TaskingState = {
  todos: [],
  lastUpdate: null,
}

class TodoActions {

  constructor(private state: TaskingState, private action: fromActions.TaskingActions) { }

  addTodo() {
    const payload = this.action.payload;
    const newTodo = { id: new Date().getTime(), title: payload };

    return tassign(this.state, {
      todos: this.state.todos.concat(newTodo),
      lastUpdate: new Date()
    });
  }

  toggleTodo() {
    const todo = this.state.todos.find((t: any) => t.id === this.action.payload);
    const index = this.state.todos.indexOf(todo);
    return tassign(this.state, {
      todos: [
        ...this.state.todos.slice(0, index),
        tassign(todo, { isCompleted: !todo.isCompleted }),
        ...this.state.todos.slice(index + 1),
      ],
      lastUpdate: new Date()
    });
  }

  removeTodo() {
    return tassign(this.state, {
      todos: this.state.todos.filter(t => t.id !== this.action.payload),
      lastUpdate: new Date()
    });
  }

  clearTodos() {
    return tassign(this.state, {
      todos: [],
      lastUpdate: new Date()
    });
  }

}

export function taskingReducer(state: TaskingState = TASKING_INITIAL_STATE, action: fromActions.TaskingActions): TaskingState {

  const todoActions: TodoActions = new TodoActions(state, action);

  switch (action.type) {
    case fromActions.ADD_TODO: {
      return todoActions.addTodo();
    }

    case fromActions.TOGGLE_TODO: {
      return todoActions.toggleTodo();
    }

    case fromActions.REMOVE_TODO: {
      return todoActions.removeTodo();
    }

    case fromActions.CLEAR_TODO: {
      return todoActions.clearTodos();
    }

    default: {
      return state;
    }
  }
}
