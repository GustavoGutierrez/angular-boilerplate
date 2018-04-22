import { NgModule, ModuleWithProviders } from "@angular/core";
import { StoreRouterConnectingModule, RouterStateSerializer } from "@ngrx/router-store";
import { StoreModule, MetaReducer, ActionReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { storeLogger } from "ngrx-store-logger";
import { localStorageSync } from "ngrx-store-localstorage";
import { environment } from "environments/environment";
import { keys } from "ramda";

import { effects } from "./effects";
import { reducers, State, CustomSerializer } from "./reducers";


export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return storeLogger()(reducer);
}

export function localStorageSyncReducer(
  reducer: ActionReducer<State>
): ActionReducer<State> {
  return localStorageSync({
    keys: keys(reducers).concat(["public", "admin"]),
    rehydrate: true,
    storage: sessionStorage
  })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = environment.production
  ? [localStorageSyncReducer]
  : [logger, localStorageSyncReducer];

export const STORE_DEV_TOOLS: any[] | ModuleWithProviders = environment.production
  ? []
  : StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production
    });

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    STORE_DEV_TOOLS
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ]
})
export class CoreStoreModule {
  constructor() {}
}
