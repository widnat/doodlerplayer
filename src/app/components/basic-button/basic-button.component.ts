import { Component, Input } from '@angular/core';

@Component({
  selector: 'basic-button',
  template: `
    <button
      type="button"
      class="p-2 rounded-md border border-black"
      (click)="action()"
    >
     {{text}}
    </button>
  `
})
export class BasicButtonComponent {
@Input() action: any;
@Input() text: string = '';
}
