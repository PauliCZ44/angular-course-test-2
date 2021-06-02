import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static isNotOldPass(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string) !== '123') {
      return { isNotOldPass: 'Old password is wrong' };
    } else {
      return null;
    }
  }

  static asyncIsNotOldPass(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((control.value as string) !== '123') {
          resolve({ asyncIsNotOldPass: 'Old password is wrong' });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static passwordsAreEqual(control: AbstractControl) {
    let p1 = control.get('newPassword');
    let p2 = control.get('newPasswordAgain');
    console.log(p1.value, p2.value);
    if (p1.value !== p2.value) {
      return { passwordsAreEqual: 'Passwords do not match!' };
    } else {
      return null;
    }
  }
}
