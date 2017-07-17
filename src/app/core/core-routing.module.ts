import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { AuthenticatedGuard } from './authenticated.guard';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    canActivateChild: [MetaGuard],
    loadChildren: 'app/login/login.module#LoginModule'
  },

  {
    path: 'admin',
    canActivate: [AuthenticatedGuard],
    canActivateChild: [MetaGuard],
    loadChildren: 'app/admin/admin.module#AdminModule'
  },

  {
    path: 'tasking',
    canActivate: [AuthenticatedGuard],
    canActivateChild: [MetaGuard],
    loadChildren: 'app/tasking/todos.module#TodosModule'
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthenticatedGuard
  ]
})
export class CoreRoutingModule { }
