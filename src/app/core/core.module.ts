import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ LayoutComponent ],
  exports: [LayoutComponent]
})
export class CoreModule { }
