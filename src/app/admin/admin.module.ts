import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppStoreModule } from '../store/app.store';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppStoreModule,
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule { }
