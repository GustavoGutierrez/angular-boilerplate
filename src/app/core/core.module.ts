import { NgModule, SkipSelf, Optional } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
} from "@angular/material";

import { CoreRoutingModule } from "./core-routing.module";
import { CoreStoreModule } from "./store";
import * as fromContainers from "./containers";
import { SharedModule } from "../shared/shared.module";

import "./utils/fontawesome";
import { throwIfAlreadyLoaded } from "./module-import-guard";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    CoreRoutingModule,
    CoreStoreModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [

  ],
  declarations: [...fromContainers.containers],
  exports: [...fromContainers.containers]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
