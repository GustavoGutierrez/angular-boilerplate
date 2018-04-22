import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },

  {
    path: '',
    loadChildren: 'app/public/public.module#PublicModule'
  },

  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },

  {
    path: '**',
    component: fromContainers.PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
