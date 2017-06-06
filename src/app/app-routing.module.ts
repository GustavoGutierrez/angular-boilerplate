import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/page',
    pathMatch: 'full'
  },
  {
    path: 'page',
    children: [
      {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
      }
    ]
  },

  /*{
    path: '',
    canActivate: [],
    data: {
      onReject: ['/login'],
      onError: ['/error']
    },
    children: [
      {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
      }
    ]
  }*/
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
