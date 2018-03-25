import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskingRoutingModule } from './tasking-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo/todo.service';

@NgModule({
  imports: [
    CommonModule,
    TaskingRoutingModule
  ],
  declarations: [
    TodoComponent
  ],
  exports: [
    TodoComponent
  ],
  providers: [TodoService],
})
export class TaskingModule { }
