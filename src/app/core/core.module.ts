import { NgModule, SkipSelf, Optional } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { CoreRoutingModule } from "./core-routing.module";
import { CoreStoreModule } from "./store";
import * as fromContainers from "./containers";

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
  declarations: [...fromContainers.containers],
  exports: [...fromContainers.containers]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
