import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgReduxModule } from '@angular-redux/store';
import { MetaModule } from '@ngx-meta/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LayoutComponent } from './layout/layout.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { JwtService } from './services/Jwt.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MetaModule.forRoot(),
    NgReduxModule,
    SharedModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtService,
      multi: true
    }
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  exports: [LayoutComponent]

})
export class CoreModule { }
