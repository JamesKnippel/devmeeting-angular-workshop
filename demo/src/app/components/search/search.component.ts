import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-cmp',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  searching(value: string): void {
    this.search.emit(value);
  }
}