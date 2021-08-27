import { Component, OnInit } from '@angular/core';
import {PlayersService} from "../service/data/players.service";
import {Match} from "../match-round/match-round.component";

export class Player {
  constructor(
    public id: number,
    public name: string,
    public elo: number
  ) {

  }
}

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[] | undefined

  constructor(private playerService:PlayersService) { }

  ngOnInit(): void {
    this.refreshPlayersList();
  }

  refreshPlayersList() {
      this.playerService.getAllPlayers().subscribe(
        response => {
          console.log(response);
          this.players = response;
        }
      )
  }

}
