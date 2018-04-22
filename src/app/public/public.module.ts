import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared';
import { PublicStoreModule } from './store';
import { PublicRoutingModule } from './public-routing.module';
import * as fromComponents from './components';
import * as fromServices from './services';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    PublicRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,

    PublicStoreModule
  ],
  providers: [...fromServices.services],
  declarations: [
    ...fromComponents.components
  ]
})
export class PublicModule { }
