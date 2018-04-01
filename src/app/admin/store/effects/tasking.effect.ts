import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as TaskingActions from '../actions/tasking.actions';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services';

@Injectable()
export class TaskingEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) { }

  @Effect()
  addTask$ = this.actions$
    .ofType(TaskingActions.ADD_TODO)
    .pipe(
      map((action: TaskingActions.AddTodo) => action.payload),
      switchMap((title: string) => {
        return this.todoService.create({ title }).pipe(
          map((response: Todo) => {
            console.log('Effect Response:', response);
            return new TaskingActions.AddTodoSuccess(response);
          })
        );
      })
    );


}
