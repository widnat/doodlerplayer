import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'doodler/player/', component: AppComponent },
  { path: 'doodler/player/:gameId', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
