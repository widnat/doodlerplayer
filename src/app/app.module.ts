import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { TitleComponent } from './components/title/title.component';
import { JoinGameComponent } from './components/join-game/join-game.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TitleComponent,
    JoinGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
