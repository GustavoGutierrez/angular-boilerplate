import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule, LayoutComponent } from './core';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [ LayoutComponent ]

})
export class AppModule {
  constructor() {
  }
}
