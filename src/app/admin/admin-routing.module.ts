import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      meta: {
        title: 'Dashboard',
        description: 'Home - Dashboard'
      }
    }
  },

  {
    path: 'tasking',
    canActivateChild: [MetaGuard],
    loadChildren: 'app/admin/tasking/tasking.module#TaskingModule'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule { }

