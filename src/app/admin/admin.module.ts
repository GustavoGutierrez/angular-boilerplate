import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule
} from "@angular/material";

// Routing by admin
import { AdminRoutingModule } from "./admin-routing.module";

// Store by admin
import { AdminStoreModule } from "./store";

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
import { SharedModule } from "../shared";
import { PublicStoreModule } from "../public/store";
import * as fromPublicServices from "../public/services";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    AdminStoreModule,
    PublicStoreModule,
    SharedModule,

    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule
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
    ...fromServices.services,
    ...fromGuards.guards,
    ...fromPublicServices.services
  ],
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  exports: []
})
export class AdminModule {}
