import { NgModule, isDevMode } from '@angular/core';
import { State, rootReducer, APP_INITIAL_STATE } from './app.reducer';
import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';
import { keys } from 'ramda';

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return storeLogger()(reducer);
}

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({keys: keys(rootReducer), rehydrate: true, storage: sessionStorage})(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> =
environment.production ? [localStorageSyncReducer]
                      : [logger, localStorageSyncReducer];

@NgModule({
  imports: [
    StoreModule.forRoot(rootReducer, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ]
})
export class AppStoreModule {
  constructor() {}
}
