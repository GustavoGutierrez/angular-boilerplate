import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

// Containers
import * as fromContainers from "./containers";

const ROUTES: Routes = [
  {
    path: "",
    component: fromContainers.LayoutComponent,
    children: [
      {
        path: "",
        pathMatch: 'full',
        component: fromContainers.DashboardComponent
      },

      {
        path: "tasking",
        component: fromContainers.TaskComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule {}
