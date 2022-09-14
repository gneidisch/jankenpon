import { Component, OnInit } from '@angular/core';
import { MyPlayer } from '../model/my-player';
import { PlayerService } from '../service/player.service';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: MyPlayer[]

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.findAll().subscribe(data => {
      this.players = data;
    });
  }

}
