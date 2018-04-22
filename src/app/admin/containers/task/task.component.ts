import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as R from 'ramda';

import { Task } from '../../models/task.model';
import * as tasking from '../../store/actions';
import * as fromStore from '../../store';

@Component({
  selector: 'app-task',
  changeDetection: ChangeDetectionStrategy.OnPush,
  moduleId: module.id,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public todos$: Observable<any>;
  public lastUpdate$: Observable<Date>;
  public todosCompleteds: number;
  public todosInCompleteds: number;
  private hasComplete: any = R.has('isCompleted');

  constructor(private store: Store<fromStore.AdminState>) {
    this.todos$ = store.select(fromStore.geTaskingState);
    this.lastUpdate$ = store.select(fromStore.getLastUpdateState);
  }

  ngOnInit(): void {
    this.todos$.subscribe((todos: any) => {
      this.todosCompleteds = 0;
      this.todosInCompleteds = 0;

      todos.forEach((todo: Task) => {
        if (!todo.isCompleted || !this.hasComplete(todo)) {
          this.todosCompleteds++;
        } else {
          this.todosInCompleteds++;
        }
      });
    });
  }

  addTodo(input: HTMLInputElement) {
    if (!input.value) {
      return;
    }
    this.store.dispatch(new tasking.AddTodo(input.value));
    input.value = '';
  }

  toggleTodo(todo: Task) {
   this.store.dispatch(new tasking.ToggleTodo(todo.id));
  }

  removeTodo(todo: Task) {
    this.store.dispatch(new tasking.RemoveTodo(todo.id));
  }

  onEnter(input: HTMLInputElement) {
    this.addTodo(input);
  }

}
