import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';


import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { fromJS, Map } from 'immutable';
import persistState from 'redux-localstorage';
import { createLogger } from 'redux-logger';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

const logger = createLogger({
  // ...options
});

import { TodosModule } from './tasking/todos.module';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './core/layout/layout.component';


@NgModule({
  imports: [
    BrowserModule,
    NgReduxModule,
    CoreModule
  ],
  declarations: [],
  bootstrap: [ LayoutComponent ]

})
export class AppModule {
  constructor(ngRedux: NgRedux<Map<string, any>>, devTools: DevToolsExtension) {

    let enhancers: Array<any> = isDevMode() ? [devTools.enhancer()] : [];
    enhancers.push(persistState());

    let middleware: Array<any> = isDevMode() ? [logger] : [];

    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE), middleware, enhancers);
  }
}
