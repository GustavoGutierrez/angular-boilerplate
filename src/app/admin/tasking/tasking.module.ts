import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskingRoutingModule } from './tasking-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo/todo.service';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatListModule,
  MatCardModule,
  MAT_LABEL_GLOBAL_OPTIONS,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TaskingRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
  ],
  declarations: [
    TodoComponent,
  ],
  exports: [
    TodoComponent
  ],
  providers: [
    TodoService,
   // {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ]
})
export class TaskingModule { }
