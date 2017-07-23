import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
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
export class TaskingRoutingModule { }
