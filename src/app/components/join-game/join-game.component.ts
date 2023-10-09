import { Component, Input } from '@angular/core';

@Component({
  selector: 'join-game',
  template: `
    <div *ngIf="!waiting" class="h-screen">
      <basic-input [title]=playerInputTitle [userInput]=playerName />
      <!-- <DrawingArea action={doneDrawing} actionText="Join Game" /> -->
    </div>
    <div *ngIf="waiting" class="h-screen">
      <!-- <Spinner message="waiting for other players to begin..." /> -->
    </div>
  `,
})

export class JoinGameComponent {
  @Input() action!: any;
  waiting: boolean = false;
  playerName: string = '';
  playerInputTitle = "Enter you name";

  doneDrawing(doodleURL: string) {
		if (this.playerName) {
			this.waiting = true;
			this.action(this.playerName, doodleURL);
		} else alert("Please enter a name");
	}
}
