import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import persistState from 'redux-localstorage';
import { createLogger } from 'redux-logger';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

const logger = createLogger({
  // ...options
});

import { AppRoutingModule } from './app-routing.module';
import { TodosModule } from './tasking/todos.module'
import { LayoutComponent } from "./core/layout/layout.component";

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgReduxModule,
    TodosModule
  ],
  providers: [],
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
