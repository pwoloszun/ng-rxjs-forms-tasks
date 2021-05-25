import { ValidatorFn, ValidationErrors, FormControl, Validators, AbstractControl } from '@angular/forms';

const capitalLetterRE = /^[A-Z]/;

export const startsWithCapitalLetterValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const { value } = control;

  if (capitalLetterRE.test(value)) {
    return null;
  } else {
    return { firstCharMustBeCapitalLetter: true };
  }
};
