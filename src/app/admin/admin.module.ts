import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from "./dashboard/dashboard.component";
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations:[
    DashboardComponent
  ],
  exports:[
    DashboardComponent
  ]
})
export class AdminModule { }
