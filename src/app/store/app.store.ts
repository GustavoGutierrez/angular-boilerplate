import { NgModule, isDevMode } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { applyMiddleware, compose } from 'redux';
import { fromJS, Map } from 'immutable';
import { persistState } from 'redux-sessionstorage';
import { createLogger } from 'redux-logger';
import { IAppState, rootReducer, APP_INITIAL_STATE } from './app.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    NgReduxModule,
    StoreModule.forRoot(rootReducer)
  ]
})
export class AppStoreModule {
  constructor() {}
  /*constructor(store: NgRedux<Map<string, any>>, devTools: DevToolsExtension) {

    const enhancers: Array<any> = isDevMode() && devTools.isEnabled() ? [devTools.enhancer(fromJS(APP_INITIAL_STATE)))] : [];
    const middleware: Array<any> = isDevMode() ? [createLogger({})] : [];

    enhancers.push(persistState());
    store.configureStore(rootReducer, fromJS(APP_INITIAL_STATE), middleware, enhancers);
  }*/
}
