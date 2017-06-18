import { Component, ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
import { IOrder } from '../../app.module';

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
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      productName: '',
      productQuantity: 0
    });
  }

  submit(): void {
    this.onSubmit.emit(this.form.value);
  }
}