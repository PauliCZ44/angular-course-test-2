import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static isNotOldPass(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string) !== '123') {
      return { isNotOldPass: 'Old password is wrong' };
    } else {
      return null;
    }
  }
}
