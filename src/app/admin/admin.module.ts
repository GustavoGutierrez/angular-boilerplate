import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

// Routing by admin
import { AdminRoutingModule } from "./admin-routing.module";

// services
import * as fromServices from "./services";
import * as fromGuards from "./guards";

// components
import * as fromComponents from "./components";

// containers - pages and layout
import * as fromContainers from "./containers";

// interceptors
import * as fromInterceptors from "./interceptors";

// Shared resoruces
import { SharedModule } from "@shared/index";

// Store Apllication
import { CoreStoreModule } from "@core/store";

import * as core from '@core/index';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    CoreStoreModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: fromInterceptors.TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: fromInterceptors.TimingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: core.ProgressInterceptor,
      multi: true,
      deps: [
        core.ProgressBarService
      ]
    },
    ...fromServices.services,
    ...fromGuards.guards
  ],
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ]
})
export class AdminModule {}
