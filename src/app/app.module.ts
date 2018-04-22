import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import * as core from './core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    core.CoreModule,
  ],
  bootstrap: [ core.ShellComponent ]
})
export class AppModule {
  constructor() {
  }
}
