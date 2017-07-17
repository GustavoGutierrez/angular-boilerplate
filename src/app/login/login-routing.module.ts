import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './loginForm/loginForm.component';
const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
    data: {
      meta: {
        title: 'Login',
        description: 'Inicia sesión para acceder'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class LoginRoutingModule { }
