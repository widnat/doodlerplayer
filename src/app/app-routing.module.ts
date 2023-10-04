import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: ':gameId', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
