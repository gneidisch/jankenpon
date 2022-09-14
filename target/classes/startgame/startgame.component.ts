import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../service/player.service';
import { MyPlayer } from '../model/my-player';

const greets = ['I choose', 'You get', 'Jan ken pon!', 'Hold my beer' ];

const mrock     = 'rock';
const mpaper    = 'paper';
const mscissors = 'scissors';

const choices = [mrock, mpaper, mscissors ];

const winMessage = "You Win!";
const loseMessage = "You Lose!";
const drawMessage = "It's a draw'!";

const winImage = ['youwin1', 'youwin2', 'youwin3'];
const loseImage = ['youlose1', 'youlose2', 'youlose3'];
const drawImage = ['wedraw1', 'wedraw2', 'wedraw3'];

@Component({
  selector: 'app-startgame',
  templateUrl: './startgame.component.html',
  styleUrls: ['./startgame.component.css']
})
export class StartgameComponent implements OnInit {
  player: MyPlayer;
  playerName: string;
  playerScore: Number;
  computerMessage : String;
  computerChoice : String;
  playResultMessage : string;
  playResultImage : string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private playerService: PlayerService) {

    this.playerName = this.route.snapshot.paramMap.get('playername');
    this.player = new MyPlayer();
    this.player.name = this.playerName;
    this.playerService.findByNameOrCreate(this.player).subscribe(data => {
      this.player = data;
    });

    this.computerMessage = "";
	this.computerChoice = "../../assets/iblank.png";

	this.playResultMessage = "";
	this.playResultImage = "../../assets/iblank.png";
  }

  onPlay(playerMove) {
    var computerMove = choices[randomInt(0, choices.length - 1)];
    this.computerChoice = "../../assets/i" + computerMove + ".png";
	this.computerMessage = greets[randomInt(0, greets.length - 1)];
	
	var playResult = evaluate(playerMove, computerMove);
    if (playResult < 0) {
	  this.playResultMessage = loseMessage;
	  this.playResultImage = "../../assets/i" + loseImage[randomInt(0, loseImage.length - 1)] + ".png";
	  this.player.score --;
    } else if (playResult > 0) {
	  this.playResultMessage = winMessage;
	  this.playResultImage = "../../assets/i" + winImage[randomInt(0, winImage.length - 1)] + ".png";
	  this.player.score ++;
    } else {
	  this.playResultMessage = drawMessage;
	  this.playResultImage = "../../assets/i" + drawImage[randomInt(0, drawImage.length - 1)] + ".png";
    }
    
    this.playerService.update(this.player).subscribe(
      res => console.log('HTTP response', res),
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }

  ngOnInit() {
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function evaluate(playerMove, computerMove) {
  if (playerMove === mrock) {
	if (computerMove == mscissors ) {
	  return 1;
	}
	if (computerMove == mpaper) {
		return -1;
	}
	return 0;
  }
  
  if (playerMove == mpaper) {
	if (computerMove == mrock) {
	  return 1;
	}
	if (computerMove == mscissors) {
	  return -1;
	}
	return 0;
  }
  
  if (computerMove == mpaper) {
    return 1;
  }
  if (computerMove == mrock) {
    return -1;
  }
  return 0;
}
