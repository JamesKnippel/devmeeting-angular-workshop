import { Component, ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms';
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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      productName: ['', Validators.required],
      productQuantity: [0, Validators.required]
    });
  }

  submit(): void {
    this.onSubmit.emit(this.form.value);
  }
}