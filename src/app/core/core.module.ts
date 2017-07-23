import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';
import { MetaModule } from '@ngx-meta/core';

import { LayoutComponent } from './layout/layout.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    MetaModule.forRoot(),
    NgReduxModule,
    SharedModule,
    CoreRoutingModule
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent
],
  exports: [LayoutComponent]

})
export class CoreModule { }
