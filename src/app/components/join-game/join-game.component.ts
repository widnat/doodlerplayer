import { Component, EventEmitter, Output } from '@angular/core';
import { AddPlayerMessage } from 'src/app/types';

@Component({
  selector: 'join-game',
  template: `
    <div *ngIf="!waiting" class="h-screen">
      <basic-input [title]="playerInputTitle" (setValue)="setPlayerName($event)" />
      <drawing-area/>
      <!-- <DrawingArea action={doneDrawing} actionText="Join Game" /> -->
    </div>
    <div *ngIf="waiting" class="h-screen">
      <spinner [message]="spinnerMessage" />
    </div>
  `,
})
export class JoinGameComponent {
  @Output() action = new EventEmitter<AddPlayerMessage>();
  waiting: boolean = false;
  playerName: string = '';
  playerInputTitle = 'Enter you name';
  spinnerMessage = 'waiting for other players to begin...';

  setPlayerName(newName: string) {
    this.playerName = newName;
  }

  doneDrawing(doodleURL: string) {
    if (this.playerName) {
      this.waiting = true;
      this.action.emit({ name: this.playerName, imageUrl: doodleURL });
    } else alert('Please enter a name');
  }
}
