import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminStoreModule } from './store';

// services
import * as fromServices from './services';

// components
import * as fromComponents from './components';

import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatListModule,
  MatCardModule,
  MAT_LABEL_GLOBAL_OPTIONS,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminStoreModule,

    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [...fromServices.services],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components]

})
export class AdminModule { }
