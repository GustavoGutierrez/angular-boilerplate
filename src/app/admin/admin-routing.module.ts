import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

// Containers
import * as fromContainers from "./containers";
import * as fromGuards from "./guards";

const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        canActivate:[
          fromGuards.AdminGuard
        ],
        component: fromContainers.DashboardComponent
      },

      {
        path: 'tasking',
        canActivate:[
          fromGuards.AdminGuard
        ],
        component: fromContainers.TaskComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule {}
