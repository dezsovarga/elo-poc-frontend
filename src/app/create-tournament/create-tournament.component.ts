import {Component, OnInit, ViewChild} from '@angular/core';
import {Player} from "../player-list/player-list.component";
import {PlayersService} from "../service/data/players.service";
import {TournamentCreatorComponent} from "./tournament-creator/tournament-creator.component";
import {TournamentService} from "../service/data/tournament.service";


export class Tournament {
  constructor(
    public name: string,
    public type: string,
    public players: Player[]
  ) {

  }
}
@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.css']
})
export class CreateTournamentComponent implements OnInit {

  allPlayers: Player[];
  tournamentPlayers: Player[];
  tournament: Tournament;
  // @ViewChild(TournamentCreatorComponent) allPlayersComp: TournamentCreatorComponent | undefined;
  // @ViewChild(TournamentCreatorComponent) tourPlayersComp: TournamentCreatorComponent | undefined;

  @ViewChild("source", { static: false }) allPlayersComp: TournamentCreatorComponent | undefined;
  @ViewChild("destination", { static: false }) tourPlayersComp: TournamentCreatorComponent | undefined;

  constructor(private playerService:PlayersService, private tournamentService:TournamentService) {
    this.allPlayers = [];
    this.tournamentPlayers = [];
    this.tournament = new Tournament("Tournament name", "league", this.tournamentPlayers);
  }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      response => {
        console.log(response);
        this.allPlayers = response;
      }
    )
  }

  moveToDestination() {
    // @ts-ignore
    let index = this.allPlayersComp.highlightedRow;
    this.tournamentPlayers.push(this.allPlayers[index]);
    // @ts-ignore
    this.allPlayers.splice(this.allPlayersComp.highlightedRow, 1);

  }

  moveBackToSource() {
    // @ts-ignore
    let index = this.tourPlayersComp.highlightedRow;
    // @ts-ignore
    this.allPlayers.push(this.tournamentPlayers[index]);
    // @ts-ignore
    this.tournamentPlayers.splice(index, 1);
  }

  saveTournament() {
    console.log(this.tournament);
    this.tournamentService.saveTournament(this.tournament).subscribe(
      response => {
        console.log(response);
      }
    )
  }
}
