import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';

import { LayoutComponent } from './layout/layout.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgReduxModule,
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent
],
  exports: [LayoutComponent]

})
export class CoreModule { }
