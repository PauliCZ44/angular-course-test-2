import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  Validators
} from '@angular/forms';

import { PasswordValidators } from './password.validators';

@Component({
  selector: 'new-password-form',
  templateUrl: './new-password-form.component.html',
  styleUrls: ['./new-password-form.component.css']
})
export class NewPasswordFormComponent {
  myForm = new FormGroup(
    {
      oldPassword: new FormControl(
        '',
        [Validators.required],
        PasswordValidators.asyncIsNotOldPass
      ),
      newPassword: new FormControl('', Validators.required),
      newPasswordAgain: new FormControl('', Validators.required)
    },
    PasswordValidators.passwordsAreEqual
  );

  resetPassword() {
    console.log('reseting');
  }

  get oldPassword() {
    return this.myForm.get('oldPassword');
  }
  get newPassword() {
    return this.myForm.get('newPassword');
  }
  get newPasswordAgain() {
    return this.myForm.get('newPasswordAgain');
  }
}
