import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CoreModule, ShellComponent } from '@core/index';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  bootstrap: [ ShellComponent ]
})
export class AppModule {
  constructor() {
  }
}
