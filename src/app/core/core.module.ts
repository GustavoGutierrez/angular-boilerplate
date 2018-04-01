import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LayoutComponent } from './layout/layout.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';

import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
} from '@angular/material';

import './fontawesome';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeLogger } from 'ngrx-store-logger';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from 'environments/environment';
import { keys } from 'ramda';

import { JwtService } from './services';
import { reducers, effects, CustomSerializer, State } from './store';

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return storeLogger()(reducer);
}

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({ keys: keys(reducers).concat(['tasking', 'admin']), rehydrate: true, storage: sessionStorage })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> =
  environment.production ? [localStorageSyncReducer]
    : [logger, localStorageSyncReducer];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    CoreRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),

    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtService,
      multi: true
    },
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  exports: [LayoutComponent]

})
export class CoreModule { }
