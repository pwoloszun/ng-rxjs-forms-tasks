import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import { countriesDict } from '../../dictionaries/countries.dict';
import { interestTypesDict, getInterestsByType$ } from '../../dictionaries/interests.dict';

@Component({
  selector: 'nts-my-form-validation-task',
  templateUrl: './my-form-validation-task.component.html',
  styleUrls: ['./my-form-validation-task.component.css']
})
export class MyFormValidationTaskComponent implements OnInit {

  allCountries = countriesDict;
  allInterestTypes = interestTypesDict;

  selectedInterestsMap = {};

  availableInterestLabels = [];

  myForm = this.fb.group({}); // TODO

  constructor(private fb: FormBuilder) {
  }

  submitHandler(event: any) {
    const formValue = {}; // TODO: DTO
    console.log('form task value', formValue);
  }

  ngOnInit(): void {
    // TODO: handle areDetailsEnabled change

    // TODO: handle selectedInterestType change

    // TODO: handle formValue.availableInterests change
  }

  buildAvailableInterests(interests: string[]) {
    // TODO
  }
}
