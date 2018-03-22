import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppStoreModule } from '../store/app.store'

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppStoreModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class AdminModule { }
