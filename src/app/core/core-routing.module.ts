import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';
import * as fromComponents from './components';

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
    canActivate: [AuthGuard],
    loadChildren: 'app/admin/admin.module#AdminModule'
  },

  {
    path: '**',
    component: fromComponents.PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class CoreRoutingModule { }
