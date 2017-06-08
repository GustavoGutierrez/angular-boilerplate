import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { AuthenticatedGuard } from './authenticated.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: '',
    loadChildren: 'app/home/home.module#HomeModule'
  },

  {
    path: 'admin',
    //canActivate: [AuthenticatedGuard],
    loadChildren: 'app/admin/admin.module#AdminModule'
  },

  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    AuthenticatedGuard
  ]
})
export class AppRoutingModule { }
