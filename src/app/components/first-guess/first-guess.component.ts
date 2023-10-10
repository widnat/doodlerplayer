import { Component, Input } from '@angular/core';

@Component({
  selector: 'first-guess',
  template: `
    <div class="h-screen">
      <div *ngif="!waiting" class="flex items-center justify-center">
				<div class="w-96 px-3 mb-3">
          <basic-input [title]="title" [userInput]="guess"/>
					<div class="flex self-stretch justify-center">
            <basic-button [action]="submit()" [text]="submitText"/>
					</div>
				</div>
			</div>

			<spinner *ngif="waiting" [message]="waitingMessage" />
		</div>
  `,
})
export class FirstGuessComponent {
  @Input() submitFirstGuess: any;
  @Input() guess: string = '';
  waiting: boolean = false;
  waitingMessage: string = 'waiting for other players to finish...';
  title: string = 'What is this doodle?';
  submitText: string = 'Submit Guess';

  submit() {
    this.submitFirstGuess();
  }
}
