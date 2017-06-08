import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { AdminComponent } from "./components/admin.component";

const routes: Routes = [
  {  
    path:'home',
    component:AdminComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[AdminComponent]
})
export class AdminRoutingModule { }

