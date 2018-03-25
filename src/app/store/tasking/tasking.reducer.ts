import { Action } from '@ngrx/store';
import { tassign } from 'tassign';
import { TaskingActionTypes, TaskingActions } from './tasking.actions';

export interface ITaskingState {
  todos: any[];
  lastUpdate: Date;
}

export const TASKING_INITIAL_STATE: ITaskingState = {
  todos: [],
  lastUpdate: null,
}

class TodoActions {

  constructor(private state: ITaskingState, private action: TaskingActions) { }

  addTodo() {
    const payload = this.action.payload;
    const newTodo = { id: new Date().getTime(), title: payload };

    return tassign(this.state, {
      todos: this.state.todos.concat(newTodo),
      lastUpdate: new Date()
    });
  }

  toggleTodo() {
    const todo = this.state.todos.find(t => t.id === this.action.payload);
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

export function taskingReducer(state: ITaskingState = TASKING_INITIAL_STATE, action: TaskingActions): ITaskingState {

  const todoActions: TodoActions = new TodoActions(state, action);

  switch (action.type) {
    case TaskingActionTypes.add: {
      return todoActions.addTodo();
    }

    case TaskingActionTypes.toggle: {
      return todoActions.toggleTodo();
    }

    case TaskingActionTypes.remove: {
      return todoActions.removeTodo();
    }

    case TaskingActionTypes.clear: {
      return todoActions.clearTodos();
    }

    default: {
      return state;
    }
  }
}
