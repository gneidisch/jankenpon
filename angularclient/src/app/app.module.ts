import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerService } from './service/player.service';
import { StartgameComponent } from './startgame/startgame.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    StartgameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
