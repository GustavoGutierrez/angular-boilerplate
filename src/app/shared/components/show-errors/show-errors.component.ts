import { Component, Input } from "@angular/core";

import { AbstractControlDirective, AbstractControl } from "@angular/forms";

@Component({
  selector: "show-errors",
  template: `
   <div *ngIf="shouldShowErrors()" class="validation-errors">
     <mat-error class="error-msg">{{getError()}}</mat-error>
   </div>
 `
})
export class ShowErrorsComponent {
  private static readonly errorMessages: any = {
    required: (params: any) => "##FIELD## can't be blank",

    minlength: (params: any) =>
      "##FIELD## should be minimum " + params.requiredLength + " characters",

    maxlength: (params: any) =>
      "##FIELD## should not be greater then " +
      params.requiredLength +
      " characters",

    pattern: (params: any) => "Should be a valid",

    email: (params: any) => "Should be vaild email."
  };

  @Input() private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return (
      this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched)
    );
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
    .map(field =>
      this.getMessage(field, this.control.errors[field], this.control)
    );
  }

  getError(): string {
    var errors = Object.keys(this.control.errors)
    .map(field =>
      this.getMessage(field, this.control.errors[field], this.control)
    );

    return errors[0];
  }

  private getMessage(type: string, params: any, control: any) {
    var fname = this.getControlName(control);

    fname = fname
      .replace("_", " ")
      .replace(" id", "")
      .toLowerCase();

    fname = fname.replace(/\b\w/g, l => l.toUpperCase());

    var msg: any = ShowErrorsComponent.errorMessages[type](params);

    return msg.replace("##FIELD##", fname);
  }

  getControlName(c: AbstractControl): string | null {
    const formGroup: any = c.parent.controls;

    return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
  }
}
