import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { JoinGameComponent } from './components/join-game/join-game.component';
import { BasicInputComponent } from './components/basic-input/basic-input.component';
import { DrawingAreaComponent } from './components/drawing-area/drawing-area.component';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';
import { FirstGuessComponent } from './components/first-guess/first-guess.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    JoinGameComponent,
    BasicInputComponent,
    DrawingAreaComponent,
    BasicButtonComponent,
    FirstGuessComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
