import { Component, ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'search-cmp',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private searchInput: FormControl = new FormControl('');
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe((value: string) => {
      this.search.emit(value);
    });
  }
}