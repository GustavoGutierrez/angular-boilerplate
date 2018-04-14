import { Directive } from "@angular/core";
import {
  NG_VALIDATORS,
  FormControl,
  Validator,
  ValidationErrors
} from "@angular/forms"; // Will import the angular forms

@Directive({
  selector: "[age-validate]",

  providers: [
    { provide: NG_VALIDATORS, useExisting: AgeValidatorDirective, multi: true }
  ]
})
export class AgeValidatorDirective implements Validator {
  // Creating class implementing Validator interface

  validate(c: FormControl): ValidationErrors {
    const num = Number(c.value);

    const isValid = !isNaN(num) && num >= 18 && num <= 85;

    const message = {
      age: {
        message: "The age must be a valid number between 18 and 85" // Will changes the error defined in errors helper.
      }
    };

    return isValid ? null : message;
  }
}
