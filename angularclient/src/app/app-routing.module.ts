import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { StartgameComponent } from './startgame/startgame.component';

const routes: Routes = [
  { path: 'play', component: StartgameComponent },
  { path: 'playerList', component: PlayerListComponent },
  { path: 'startgame', component: StartgameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
