import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './loginForm/loginForm.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginFormComponent
  ]
})
export class LoginModule { }
