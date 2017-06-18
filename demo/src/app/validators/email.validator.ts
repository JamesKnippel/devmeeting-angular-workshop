import { AbstractControl } from '@angular/forms';
import { IEmailValidator } from '../app.module';

export function EmailValidator(control: AbstractControl): IEmailValidator {
  // RFC 2822 compliant regex
  const regexp: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const valid: boolean = regexp.test(control.value);
  return valid ? null : { email: true };
}