import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyPlayer } from './model/my-player';
import { PlayerService } from './service/player.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title : string;
  player: MyPlayer;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
	private playerService: PlayerService) {
    this.title = 'Jan Ken Pon';
    this.player = new MyPlayer();
  }

  ngOnInit() {
  }
  
  onSubmitPlay() {
    this.playerService.findByNameOrCreate(this.player).subscribe(result => this.gotoStartgame());
  }

  gotoStartgame() {
    this.router.navigate(['/startgame', {player: this.player, playername: this.player.name}]);
    //this.router.navigate([{path: '/startgame', data: {player: this.player}}]);
  }
}
