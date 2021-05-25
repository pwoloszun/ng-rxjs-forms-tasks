import { ValidatorFn, ValidationErrors, FormControl, Validators, AbstractControl } from '@angular/forms';

import { startsWithCapitalLetterValidator } from './starts-with-capital-letter.validator';

export const defaultNameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const requiredValidationResult = Validators.required(control);
  const minLengthValidationResult = Validators.minLength(3)(control);
  const capitalLetterValidationResult = startsWithCapitalLetterValidator(control);

  const allValidationsResult = Object.assign({},
    requiredValidationResult,
    minLengthValidationResult,
    capitalLetterValidationResult
  );

  if (Object.keys(allValidationsResult).length < 1) {
    return null;
  } else {
    return allValidationsResult;
  }
};
