import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';

import * as fromComponents from './components';
import * as fromValidators from './validators';
import * as fromPipes from './pipes';
import * as fromDirectives from './directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...fromComponents.components,
    ...fromValidators.validators,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
  ],
  exports: [
    ...fromComponents.components,
    ...fromValidators.validators,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
  ]
})
export class SharedModule { }
