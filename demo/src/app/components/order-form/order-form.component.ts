import { Component, ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms';
import { IOrder, NaturalNumberValidator } from '../../app.module';

@Component({
  selector: 'order-form-cmp',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  @Output() onSubmit: EventEmitter<IOrder> = new EventEmitter<IOrder>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['J', Validators.required],
      lastName: ['K', Validators.required],
      address: ['123', Validators.required],
      email: ['j@gmail.com', Validators.required],
      productName: ['Jay', Validators.required],
      productQuantity: [0, [
        Validators.required,
        NaturalNumberValidator
      ]]
    });
  }

  submit(): void {
    this.onSubmit.emit(this.form.value);
  }
}