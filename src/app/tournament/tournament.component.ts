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

  groupRounds : MatchRound[][] = [];
  numberOfPlayers: number = 0;
  groupNames: string[] = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E', 'Group F', 'Group G', 'Group H', 'Knockout-Stage'];
  groupNumber = 0;

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
        this.generateRounds(this.leagueTournament);
        this.loading = false;
      }
    );
  }

  generateRounds(tournament: LeagueTournament) {
    this.groupRounds = [];
    this.groupNames = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E', 'Group F', 'Group G', 'Group H', 'Knockout-Stage'];
    if (tournament.type !== 'knock-out') {
      this.groupNames.splice(tournament.groups.length, 8 - tournament.groups.length);
      tournament.groups.forEach(group => this.generateMatchRounds(group.matches));
      if (tournament.knockoutStage.matches.length > 0) {
        this.showStandings = false;
        this.groupNumber = tournament.groups.length;
        this.generateMatchRounds(tournament.knockoutStage.matches);
      }
    } else {
      this.generateMatchRounds(tournament.knockoutStage.matches);
      this.showStandings = false;
    }
  }
  generateMatchRounds(matches: LeagueMatch[]) {
    let rounds : MatchRound[] = [];
    let roundNumber = 1;
    let matchRound : MatchRound = {
      matches: [],
      roundNumber: 1
    };
    matches.forEach(match => {
      if (match.roundNumber == roundNumber) {
        matchRound.matches.push(match);
      } else {
        rounds.push(matchRound);
        roundNumber++;
        matchRound = {
          matches: [],
          roundNumber: roundNumber
        };
        matchRound.matches.push(match);
      }
    });
    rounds.push(matchRound);
    this.groupRounds.push(rounds);
  }

  playMatches() {
    let matches: LeagueMatch[] = [];
    if (this.leagueTournament.type === 'knock-out') {
      matches = this.leagueTournament.knockoutStage.matches;
    }
    if (this.leagueTournament.type === 'league/knock-out') {
      if (this.leagueTournament.knockoutStage.matches.length > 0) {
        matches = this.leagueTournament.knockoutStage.matches;
      } else {
        matches = this.leagueTournament.groups[this.groupNumber].matches;
      }
    }
    let firstIncompleteMatch = matches.find(elem => elem.score1 == -1 && elem.score2 == -1);
    let actualRoundNumber = firstIncompleteMatch ? firstIncompleteMatch.roundNumber : 0;
    let firstIncompleteMatchRound =
      matches.filter( (match) => match.roundNumber === actualRoundNumber);

    this.tournamentService.playTournamentMatches(this.leagueTournament.id, firstIncompleteMatchRound).subscribe(
      response => {
        console.log(response);
        this.refreshTournament();
      }
    )
  }

  resetStandings() {
    this.groupRounds = [];
    this.tournamentService.resetTournament(this.leagueTournament.id).subscribe(
      response => {
        console.log(response);
        this.leagueTournament = response;
        this.generateRounds(this.leagueTournament);
        this.groupNumber = 0;
        this.showStandings = true;
      })
  }

  switchGroup(groupNumber: number) {
    this.groupNumber = groupNumber;
    if (this.groupNumber === this.leagueTournament.groups.length) {
      this.showStandings = false;
    }
    else {
      this.showStandings = true;
    }
  }
}
