import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Map } from 'immutable';

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../../../store/tasking/tasking.actions';
import { IAppState } from '../../../store';
import * as R from 'ramda';

/**
 * Required for Aot
 * @param state
 */
export function todosSelector(state: IAppState): any {
  return state.tasking.todos;
}

export function lastUpdateSelector(state: IAppState): any {
  return state.tasking.lastUpdate;
}

interface ITodo {
  id: number;
  isCompleted?: boolean;
  title: string;
}

@Component({
  selector: 'app-todo',
  moduleId: module.id,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todosCompleteds = 0;
  public todosInCompleteds = 0;

  @select(todosSelector) todos$: Observable<any>;
  @select(lastUpdateSelector) lastUpdate$: Observable<string>;

  constructor(private ngRedux: NgRedux<Map<string, any>>) { }

  ngOnInit(): void {
    this.todos$.subscribe((todos: Array<ITodo>) => {
      this.todosCompleteds = 0;
      this.todosInCompleteds = 0;
      const hasComplete = R.has('isCompleted');

      todos.forEach((todo: ITodo) => {
        if (!todo.isCompleted || !hasComplete(todo)) {
          this.todosCompleteds++;
        } else {
          this.todosInCompleteds++;
        }
      });
    });
  }

  addTodo(input) {

    if (!input.value) {
      return;
    }

    this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });
    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }

}
