import { NgModule, SkipSelf, Optional } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { SharedModule } from "@shared/shared.module";
import { CoreRoutingModule } from "./core-routing.module";
import { CoreStoreModule } from "./store";
import * as fromContainers from "./containers";
import * as fromServices from "./services";
import * as fromInterceptors from "./interceptors";

import { throwIfAlreadyLoaded } from "./common/module-import-guard";
import "./common/fontawesome";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CoreRoutingModule,
    CoreStoreModule,
  ],
  providers: [
    ...fromServices.services
  ],
  declarations: [...fromContainers.containers],
  exports: [...fromContainers.containers]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
