import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { AuthenticatedGuard } from './authenticated.guard';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },

  {
    path: '',
    canActivateChild: [MetaGuard],
    loadChildren: 'app/public/login/login.module#LoginModule'
  },

  {
    path: 'admin',
    canActivate: [AuthenticatedGuard],
    canActivateChild: [MetaGuard],
    loadChildren: 'app/admin/admin.module#AdminModule'
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
