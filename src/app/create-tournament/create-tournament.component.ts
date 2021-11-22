import {Component, OnInit} from '@angular/core';
import {Player} from "../player-list/player-list.component";
import {PlayersService} from "../service/data/players.service";
import {TournamentService} from "../service/data/tournament.service";
import {Tournament} from "../model/Tournament";
import {Pot} from "../model/Pot";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.css']
})
export class CreateTournamentComponent implements OnInit {

  allPlayers: Player[];
  tournamentPlayers: Player[];
  tournament :Tournament=<Tournament>{};
  tournamentTypes: string[] = ['league', 'knock-out', 'league/knockout'];
  potSize: number = 8;
  pagination1 = 'pag1';
  pagination2 = 'pag2';
  pots: Pot[] = [];
  numberOfPlayersOptions: number[] = [8, 16, 32];
  selectedNumberOfPlayers: number = 0;


  constructor(private playerService:PlayersService, private tournamentService:TournamentService, private router: Router,) {
    this.allPlayers = [];
    this.tournamentPlayers = [];
  }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      response => {
        console.log(response);
        this.allPlayers = response;
        this.sortIntoPots(this.allPlayers);
        console.log(this.pots);
      }
    );
    this.playerService.addPlayerClicked.subscribe( response => {
      let playerWithCheckbox = this.playerService.getPlayerByIdFromPots(response.playerId, this.pots);
      if (playerWithCheckbox){
        this.tournamentPlayers.push(playerWithCheckbox.player);
      }
    });
    this.playerService.removePlayerClicked.subscribe( response => {
      let playerWithCheckbox = this.playerService.getPlayerByIdFromPots(response.playerId, this.pots);
      if (playerWithCheckbox){
        const index = this.tournamentPlayers.indexOf(playerWithCheckbox.player, 0);
        this.tournamentPlayers.splice(index, 1);
      }
    })
  }

  sortIntoPots(players: Player[]) {
    const iterate = players.length / this.potSize;
    let playersCb = players.map(player => {
      return {player: player, checked: false}
    });
    for (let i=1; i<=iterate; i++) {
      let pot = {playersWithCheckbox : this.playerService.getPot(playersCb, i, this.potSize), potNumber: i}
      this.pots.push(pot);
    }
  }

  saveTournament() {
    this.tournament.players = this.tournamentPlayers;
    console.log(this.tournament);

    this.tournamentService.saveTournament(this.tournament).subscribe(
      response => {
        this.router.navigateByUrl('/tournaments');
      }
    )
  }

  // updateSelectedTournamentType() {
  //   this.selectedTournamentType =
  // }
}
