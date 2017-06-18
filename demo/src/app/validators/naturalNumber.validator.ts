import { AbstractControl } from '@angular/forms';
import { INaturalNumberValidator } from '../app.module';

export function NaturalNumberValidator(control: AbstractControl): INaturalNumberValidator {
  const value: number = control.value;
  const notValid: boolean = isNaN(value) || Math.round(value) !== value || value <= 0;
  return notValid ? { naturalNumber: true } : null;
}