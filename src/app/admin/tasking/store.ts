import { tassign } from 'tassign';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODOS } from './actions';
import { Map } from 'immutable';

export interface ITaskingState {
  todos: any[];
  lastUpdate: Date;
}

export const TASKING_INITIAL_STATE: ITaskingState = {
  todos: [],
  lastUpdate: null,
}


class TodoActions {

  constructor(private state, private action) {
    console.log(this.action);
  }

  addTodo() {
    var payload:any = this.action.title;
    console.log('this.action.title', this.action.title)
    var newTodo = { id: this.state.todos.length + 1, title: payload };

    return tassign(this.state, {
      todos: this.state.todos.concat(newTodo),
      lastUpdate: new Date()
    });
  }

  toggleTodo() {
    var todo = this.state.todos.find(t => t.id === this.action.id);
    var index = this.state.todos.indexOf(todo);
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
      todos: this.state.todos.filter(t => t.id !== this.action.id),
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

export function taskingReducer(state: ITaskingState = TASKING_INITIAL_STATE, action): ITaskingState {

  var todoActions: TodoActions = new TodoActions(state, action);

  switch (action.type) {
    case ADD_TODO: return todoActions.addTodo();
    case TOGGLE_TODO: return todoActions.toggleTodo();
    case REMOVE_TODO: return todoActions.removeTodo();
    case CLEAR_TODOS: return todoActions.clearTodos();
  }

  return state;
}
