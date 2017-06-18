import { AbstractControl } from '@angular/forms';
import { INaturalNumber } from '../app.module';

export function NaturalNumberValidator(control: AbstractControl): INaturalNumber {
  const value: number = control.value;
  if (isNaN(value) || Math.round(value) !== value || value <= 0) {
    return {
      naturalNumber: true
    };
  }
}