import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { webSocket } from 'rxjs/webSocket';
import { Message, AddPlayerMessage } from '../types';
import { MessageType, PlayerComponentEnum } from '../enums';
const ws = webSocket(
  'wss://qqhbc125y4.execute-api.us-east-2.amazonaws.com/production/'
);

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  sendMessageAction = 'sendmessage';
  hasConstructed = false;
  doodleAssignment: string = '';
  component: PlayerComponentEnum = PlayerComponentEnum.JoinGame;
  options: Array<string> = new Array<string>();
  gameId: string = '';
  title: string = 'Doodler';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.gameId = String(this.activatedRoute.snapshot.paramMap.get('gameId'));

    ws.subscribe(
      (msg: any) => this.handleServerMessage(msg.data),
      (err) => {
        console.error(err);
        alert(`Websocket Error: ${err}`);
      },
      () => console.log('complete')
    );
	this.hasConstructed = true;
  }

  handleServerMessage(msg: string) {
    const message = JSON.parse(msg) as Message;
    if (message.type === MessageType.CreateDoodle) {
      this.doodleAssignment = message.value;
      this.component = PlayerComponentEnum.CreateAssignmentDoodle;
    } else if (message.type === MessageType.WaitingForOtherPlayers) {
      console.log('waiting for other players to guess');
      this.component = PlayerComponentEnum.WaitingForOtherPlayers;
    } else if (message.type === MessageType.MakeAGuess) {
      console.log('ready to guess');
      this.component = PlayerComponentEnum.PlayersFirstGuess;
    } else if (message.type === MessageType.ChooseYourAnswer) {
      console.log('ready to guess again');
      this.component = PlayerComponentEnum.PlayersSecondGuess;
      this.options = JSON.parse(message.value) as Array<string>;
    }
  }

  joinGame(playerName: string, doodleURL: string) {
    var addPlayer = {
    	name: playerName,
    	imageUrl: doodleURL,
    } as AddPlayerMessage;
    var jsonAddPlayer = JSON.stringify(addPlayer);
    this.sendMessage(MessageType.AddPlayer, jsonAddPlayer);
  }

  submitAssignmentDoodle(doodleURL: string) {
    this.sendMessage(MessageType.SubmitAssignmentDoodle, doodleURL);
  }

  submitFirstGuess(guess: string) {
    this.sendMessage(MessageType.SubmitFirstGuess, guess);
  }

  submitSecondGuess(guess: string) {
    this.sendMessage(MessageType.SubmitSecondGuess, guess);
  }

  sendMessage(type: MessageType, value: string) {
    var msg = {
    	action: this.sendMessageAction,
    	type: type,
    	recipientConnectionId: this.gameId,
    	senderConnectionId: '',
    	value: value,
    } as Message;
    var jsonRequest = JSON.stringify(msg);
    if (this.hasConstructed) {
		ws.next(jsonRequest);
    }
  }
}
