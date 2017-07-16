import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoService } from './todo-list/todo.service';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  declarations: [
    TodoListComponent,
    TodoDashboardComponent
  ],
  exports: [
    TodoListComponent,
    TodoDashboardComponent
  ],
  providers: [TodoService],
})
export class TodosModule { }
