import { Component, OnInit } from '@angular/core';
import * as tasking from '../../../store/tasking/tasking.actions';
import { AppState } from '../../../store';
import { Store, select } from '@ngrx/store';
import * as R from 'ramda';
import { Observable } from 'rxjs/Observable';

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

  public todos$: Observable<any>;
  public lastUpdate$: Observable<Date>;
  public todosCompleteds: number;
  public todosInCompleteds: number;
  private hasComplete: any = R.has('isCompleted');

  constructor(private store: Store<AppState>) {
    this.todos$ = store.pipe(select((state: AppState) => state.tasking.todos ));
    this.lastUpdate$ = store.pipe(select((state: AppState) => state.tasking.lastUpdate));
  }

  ngOnInit(): void {
    this.todos$.subscribe((todos: any) => {
      this.todosCompleteds = 0;
      this.todosInCompleteds = 0;

      todos.forEach((todo: ITodo) => {
        if (!todo.isCompleted || !this.hasComplete(todo)) {
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
    this.store.dispatch(new tasking.AddTodoAction(input.value));
    input.value = '';
  }

  toggleTodo(todo) {
   this.store.dispatch(new tasking.ToggleTodoAction(todo.id));
  }

  removeTodo(todo) {
    this.store.dispatch(new tasking.RemoveTodoAction(todo.id));
  }

  onEnter(input) {
    this.addTodo(input);
  }

}
