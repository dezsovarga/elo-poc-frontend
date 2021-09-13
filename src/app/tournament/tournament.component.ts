import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TournamentService} from "../service/data/tournament.service";
import {LeagueTournament} from "../model/LeagueTournament";
import {LeagueMatch} from "../model/LeagueMatch";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  id = 0;
  leagueTournament : LeagueTournament = {
    id: 0,
    name: '',
    type: '',
    standings: [],
    matches: []
  }

  constructor(
    private tournamentService: TournamentService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.refreshTournament();
  }
  refreshTournament() {
    this.id = this.route.snapshot.params['id'];
    this.tournamentService.getTournament(this.id).subscribe(
      response => {
        console.log(response);
        this.leagueTournament = response;
      }
    );
  }

  playMatches() {
    let firstIncompleteMatchRound : LeagueMatch[] = [];
    this.leagueTournament.matches.forEach( (elem) => {
      if (elem.score1 == -1 && elem.score2 == -1
          && firstIncompleteMatchRound.length<this.leagueTournament.standings.length/2) {
        firstIncompleteMatchRound.push(elem);
      }
    } )
    this.tournamentService.playTournamentMatches(this.leagueTournament.id, firstIncompleteMatchRound).subscribe(
      response => {
        console.log(response);
        this.refreshTournament();
        // this.playMatchList = response;
      }
    )
  }

  resetStandings() {
    this.tournamentService.resetTournament(this.leagueTournament.id).subscribe(
      response => {
        console.log(response);
        this.leagueTournament = response;
      })
  }

}
