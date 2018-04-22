import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { effects } from './effects';
import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('public', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class PublicStoreModule {
  constructor() { }
}
