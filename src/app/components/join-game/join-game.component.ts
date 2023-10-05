import { Component, Input } from '@angular/core';

@Component({
  selector: 'join-game',
  template: `
    <div *ngIf="!waiting" className="h-screen">
      <PlayerNameInput updateName={setPlayerName} />
      <DrawingArea action={doneDrawing} actionText="Join Game" />
    </div>
    <div *ngIf="waiting" className="h-screen">
      <Spinner message="waiting for other players to begin..." />
    </div>
  `,
})

export class JoinGameComponent {
  @Input() action!: any;
  waiting: boolean = false;
  playerName: string = '';

  doneDrawing(doodleURL: string) {
		if (this.playerName) {
			this.waiting = true;
			this.action(this.playerName, doodleURL);
		} else alert("Please enter a name");
	}
}
