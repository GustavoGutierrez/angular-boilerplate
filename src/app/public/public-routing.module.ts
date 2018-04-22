import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromContainers from './containers';
const routes: Routes = [
  {
    path: '',
    component: fromContainers.LayoutComponent,
    children:[
      {
        path: '',
        component: fromContainers.LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class PublicRoutingModule { }
