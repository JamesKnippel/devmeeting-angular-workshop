import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ISortOptions } from '../../app.module';

@Component({
  selector: 'sort-button',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.css']
})
export class SortButtonComponent {
  @Input() property: string = '';
  @Input() sort: ISortOptions;

  @Output() sortChange: EventEmitter<string> = new EventEmitter<string>();

  onClick(prop: string): void {
    this.sortChange.emit(prop);
  }
}