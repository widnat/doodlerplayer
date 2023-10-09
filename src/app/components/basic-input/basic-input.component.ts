import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'basic-input',
  template: `
    <div class="flex items-center justify-center">
			<div class="w-96 px-3">
				<label class="block uppercase tracking-wide text-teal-700 text-xs font-bold mb-2">
					{{title}}
				</label>
				<input
					class="appearance-none block w-full text-gray-700 border border-green-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
					type="text"
					value=userInput
				/>
			</div>
		</div>
  `,
})
export class BasicInputComponent {
  @Input() title: string = '';
  @Input() userInput: string = '';
}
