import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';

import { PublicRoutingModule } from './public-routing.module';

import * as fromContainers from './containers';

import * as fromInterceptors from '@core/interceptors';
import * as fromServices from '@core/services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    PublicRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: fromInterceptors.ProgressInterceptor,
      multi: true,
      deps: [
        fromServices.ProgressBarService
      ]
    }
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class PublicModule { }
