import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions';
import { IAppState } from '../../store';
import * as _ from "lodash";

@Component({
  selector: 'app-todo-list',
  moduleId: module.id,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @select(s => s.tasking.todos) todos;
  @select(s => s.tasking.lastUpdate) lastUpdate;
  public todosCompleteds:number = 0;
  public todosInCompleteds:number = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {

    this.todos.subscribe(todos => {
      this.todosCompleteds=0;
      this.todosInCompleteds=0;
      todos.forEach(todo => {
        if (!todo.isCompleted || !_.has(todo, 'isCompleted')) {
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
