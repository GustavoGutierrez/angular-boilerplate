import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
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
  declarations: [],
  imports: [
    BrowserModule,
    NgReduxModule,
    CoreModule
  ],
  bootstrap: [LayoutComponent]

})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {

    let enhancers: Array<any> = isDevMode() ? [devTools.enhancer()] : [];
    enhancers.push(persistState());

    let middleware: Array<any> = isDevMode() ? [logger] : [];

    ngRedux.configureStore(rootReducer, INITIAL_STATE, middleware, enhancers);
  }
}
