import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup } from '@angular/forms';

import { getArraysOfFormControls, getFormArray } from '@app/utils';

@Component({
  selector: 'nts-d-dynamic-forms-example',
  templateUrl: './d-dynamic-forms-example.component.html',
  styleUrls: ['./d-dynamic-forms-example.component.css']
})
export class DDynamicFormsExampleComponent implements OnInit {

  // dictionaries
  availableUserRoles = [
    { id: 100, name: 'user' },
    { id: 200, name: 'su' },
    { id: 300, name: 'root' },
  ];

  // form
  myForm: FormGroup;

  // helpers
  get listNameCtrl(): FormControl {
    return this.myForm.get('listName') as FormControl;
  }

  get userRolesCtrls(): FormControl[] {
    return getArraysOfFormControls('userRoles', this.myForm);
  }

  get extrasCtrls(): FormControl[] {
    return getArraysOfFormControls('extras', this.myForm);
  }

  get otherUsersCtrls(): FormGroup[] {
    return getArraysOfFormControls('otherUsers', this.myForm) as any as FormGroup[];
  }

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  submitHandler() {
    console.log('form value', this.myForm.value);
  }

  createExtra() {
    const extrasArrayCtrl = getFormArray('extras', this.myForm);
    extrasArrayCtrl.push(new FormControl(''));
  }

  removeExtra(index: number) {
    const extrasArrayCtrl = getFormArray('extras', this.myForm);
    extrasArrayCtrl.removeAt(index);
  }

  createOtherUser() {
    const otherUserGroup = this.formBuilder.group({
      name: [''],
      age: [21],
      hasAgreed: [true]
    });
    const otherUsersArrayCtrl = getFormArray('otherUsers', this.myForm);
    otherUsersArrayCtrl.push(otherUserGroup);
  }

  removeOtherUser(index: number) {
    const otherUsersArrayCtrl = getFormArray('otherUsers', this.myForm);
    otherUsersArrayCtrl.removeAt(index);
  }

  private initForm() {
    this.myForm = this.formBuilder.group({
      listName: [''],
      userRoles: this.buildUserRolsArrayCtrl(),
      extras: new FormArray([]),
      otherUsers: new FormArray([]),
    });
  }

  private buildUserRolsArrayCtrl(): FormArray {
    const userRolesArr = this.availableUserRoles.map((topping) => {
      return this.formBuilder.control(false);
    });
    return this.formBuilder.array(userRolesArr, [/* some validators */]);
  }

}
