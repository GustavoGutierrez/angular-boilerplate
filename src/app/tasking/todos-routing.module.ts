import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    data: {
      meta: {
        title: 'Lista de tareas',
        description: 'Lista de tareas'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class TodosRoutingModule { }
