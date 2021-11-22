import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TournamentService} from "../service/data/tournament.service";
import {LeagueTournament} from "../model/LeagueTournament";
import {LeagueMatch} from "../model/LeagueMatch";
import {MatchRound} from "../model/MatchRound";
import {KnockoutStage} from "../model/KnockoutStage";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  id = 0;
  loading = true;
  showStandings = true;
  leagueTournament : LeagueTournament = {
    id: 0,
    name: '',
    type: '',
    groups: [],
    knockoutStage: <KnockoutStage>{}
  }

  rounds : MatchRound[] = [];
  numberOfPlayers: number = 0;

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
        this.rounds = [];
        this.generateRounds(this.leagueTournament);
        this.loading = false;
      }
    );
  }

  generateRounds(tournament: LeagueTournament) {
    if (tournament.type !== 'knock-out') {
      this.generateMatchRounds(tournament.groups[0].matches);
    } else {
      this.generateMatchRounds(tournament.knockoutStage.matches);
      this.showStandings = false;
    }
  }
  generateMatchRounds(matches: LeagueMatch[]) {
    let roundNumber = 1;
    let matchRound : MatchRound = {
      matches: [],
      roundNumber: 1
    };
    matches.forEach(match => {
      if (match.roundNumber == roundNumber) {
        matchRound.matches.push(match);
      } else {
        this.rounds.push(matchRound);
        roundNumber++;
        matchRound = {
          matches: [],
          roundNumber: roundNumber
        };
        matchRound.matches.push(match);
      }
    });
    this.rounds.push(matchRound);
  }

  playMatches() {
    let matches = this.leagueTournament.type === 'league' ?
      this.leagueTournament.groups[0].matches : this.leagueTournament.knockoutStage.matches;
    let firstIncompleteMatch = matches.find(elem => elem.score1 == -1 && elem.score2 == -1);
    let actualRoundNumber = firstIncompleteMatch ? firstIncompleteMatch.roundNumber : 0;
    let firstIncompleteMatchRound =
      matches.filter( (match) => match.roundNumber === actualRoundNumber);

    this.tournamentService.playTournamentMatches(this.leagueTournament.id, firstIncompleteMatchRound).subscribe(
      response => {
        console.log(response);
        this.refreshTournament();
        // this.playMatchList = response;
      }
    )
  }

  resetStandings() {
    this.rounds = [];
    this.tournamentService.resetTournament(this.leagueTournament.id).subscribe(
      response => {
        console.log(response);
        this.leagueTournament = response;
        this.generateRounds(this.leagueTournament);
      })
  }

}
