import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[promoted-product]',
  exportAs: 'promoted'
})
export class PromotedProductDirective implements OnInit {
  @Input('promoted-product') promoted: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.promoted) {
      this.el.nativeElement.classList.add('list-group-item-success');
    }
  }
}