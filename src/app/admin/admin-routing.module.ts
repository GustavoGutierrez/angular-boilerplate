import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// components
import * as fromComponents from './components';

const ROUTES: Routes = [
  {
    path: '',
    component: fromComponents.DashboardComponent
  },

  {
    path: 'tasking',
    component: fromComponents.TodoComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule { }

