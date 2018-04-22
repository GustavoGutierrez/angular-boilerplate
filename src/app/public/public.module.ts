import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../shared';

import { PublicStoreModule } from './store';
import { PublicRoutingModule } from './public-routing.module';

import * as fromContainers from './containers';
import * as fromServices from './services';

import * as core from '../core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    PublicRoutingModule,
    SharedModule,
    PublicStoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: core.ProgressInterceptor,
      multi: true,
      deps: [
        core.ProgressBarService
      ]
    },
    ...fromServices.services
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class PublicModule { }
