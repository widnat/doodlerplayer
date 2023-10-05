import { Component, Input } from '@angular/core';

@Component({
  selector: 'title',
  template: `
    <h1 className="flex justify-center text-6xl py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-gray-800">
	    {{title}}
    </h1>
    <h1 className="flex justify-center mb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-gray-800">
    	{{page}}
    </h1>
  `,
})
export class TitleComponent {
  @Input() title!: string;
  @Input() page!: string;
}
