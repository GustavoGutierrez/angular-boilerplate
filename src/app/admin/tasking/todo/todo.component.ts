import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions';
import { fromJS, Map } from 'immutable';
import * as R from 'ramda';

@Component({
  selector: 'app-todo',
  moduleId: module.id,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @select(s => s.tasking.todos) todos;
  @select(s => s.tasking.lastUpdate) lastUpdate;
  public todosCompleteds: number = 0;
  public todosInCompleteds: number = 0;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {

    this.todos.subscribe(todos => {
      this.todosCompleteds = 0;
      this.todosInCompleteds = 0;
      const hasComplete = R.has('isCompleted');

      todos.forEach(todo => {
        if (!todo.isCompleted || !hasComplete(todo)) {
          this.todosCompleteds++;
        } else {
          this.todosInCompleteds++;
        }
      });
    });

  }

  addTodo(input) {
    if (!input.value) return;

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
