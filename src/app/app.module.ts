import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { TitleComponent } from './components/title/title.component';
import { JoinGameComponent } from './components/join-game/join-game.component';
import { BasicInputComponent } from './components/basic-input/basic-input.component';
import { DrawingAreaComponent } from './components/drawing-area/drawing-area.component';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TitleComponent,
    JoinGameComponent,
    BasicInputComponent,
    DrawingAreaComponent,
    BasicButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
