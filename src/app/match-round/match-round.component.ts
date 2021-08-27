import { Component, OnInit } from '@angular/core';
import {Player, PlayerListComponent} from "../player-list/player-list.component";
import {PlayersService} from "../service/data/players.service";

export class Match {
  constructor(
    public player1: Player,
    public player2: Player,
    public score1: number,
    public score2: number
  ) {

  }
}

@Component({
  selector: 'app-match-round',
  templateUrl: './match-round.component.html',
  styleUrls: ['./match-round.component.css']
})
export class MatchRoundComponent implements OnInit {

  playMatchList: Match[] | undefined


  constructor(
    private playerService:PlayersService,
    private playerList:PlayerListComponent
    ) { }

  ngOnInit(): void {
  }

  generateMatchRound() {
    this.playerService.generateMatchRound().subscribe(
      response => {
        console.log(response);
        this.playMatchList = response;
        this.playMatches();
      }
    )
  }

  playMatches() {
    this.playerService.getMatchScores(this.playMatchList).subscribe(
      response => {
        console.log(response);
        this.playMatchList = response;
      }
    )
  }

  saveNewRatings() {
    this.playerService.saveRatings(this.playMatchList).subscribe(
      response => {
        console.log(response);
        // this.playerList.players = response;
        this.generateMatchRound();
      }
    )
  }
}
