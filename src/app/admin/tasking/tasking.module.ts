import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskingRoutingModule } from './tasking-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo/todo.service';
import {CdkTableModule} from '@angular/cdk/table';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TaskingRoutingModule,
           // Angular Material Components
           CdkTableModule,
           MatAutocompleteModule,
           MatButtonModule,
           MatButtonToggleModule,
           MatCardModule,
           MatCheckboxModule,
           MatChipsModule,
           MatDatepickerModule,
           MatDialogModule,
           MatDividerModule,
           MatExpansionModule,
           MatGridListModule,
           MatIconModule,
           MatInputModule,
           MatListModule,
           MatMenuModule,
           MatNativeDateModule,
           MatPaginatorModule,
           MatProgressBarModule,
           MatProgressSpinnerModule,
           MatRadioModule,
           MatRippleModule,
           MatSelectModule,
           MatSidenavModule,
           MatSliderModule,
           MatSlideToggleModule,
           MatSnackBarModule,
           MatSortModule,
           MatStepperModule,
           MatTableModule,
           MatTabsModule,
           MatToolbarModule,
           MatTooltipModule,
  ],
  declarations: [
    TodoComponent
  ],
  exports: [
    TodoComponent
  ],
  providers: [TodoService],
})
export class TaskingModule { }
