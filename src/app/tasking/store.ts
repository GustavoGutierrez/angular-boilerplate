import { tassign } from 'tassign'; 
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODOS } from './actions'; 

export interface ITaskingState {
  todos: any[];
  lastUpdate: Date; 
}

export const TASKING_INITIAL_STATE: ITaskingState = { 
  todos: [],
  lastUpdate: null,
}

function addTodo(state, action) {
  var newTodo = { id: state.todos.length + 1, title: action.title };

  return tassign(state, {
    todos: state.todos.concat(newTodo),
    lastUpdate: new Date()
  });
}

function toggleTodo(state, action) {
  var todo = state.todos.find(t => t.id === action.id);

  // Now, we need to find the position of this item in the array. 
  var index = state.todos.indexOf(todo);

  return tassign(state, {
    todos: [
      ...state.todos.slice(0, index),
      tassign(todo, { isCompleted: !todo.isCompleted }),
      ...state.todos.slice(index + 1),
    ],
    lastUpdate: new Date()
  });
}

function removeTodo(state, action) {
  return tassign(state, {
    todos: state.todos.filter(t => t.id !== action.id),
    lastUpdate: new Date()
  });
}

function clearTodos(state, action) {
  return tassign(state, {
    todos: [],
    lastUpdate: new Date()
  });
}

export function taskingReducer(state: ITaskingState = TASKING_INITIAL_STATE, action): ITaskingState {
  switch (action.type) {
    case ADD_TODO: return addTodo(state, action);
    case TOGGLE_TODO: return toggleTodo(state, action);
    case REMOVE_TODO: return removeTodo(state, action);
    case CLEAR_TODOS: return clearTodos(state, action);
  }

  return state; 
}