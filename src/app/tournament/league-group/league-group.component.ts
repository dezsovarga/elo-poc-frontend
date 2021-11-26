import {Component, Input, OnInit} from '@angular/core';
import {MatchRound} from "../../model/MatchRound";
import {LeagueTournament} from "../../model/LeagueTournament";

@Component({
  selector: 'app-league-group',
  templateUrl: './league-group.component.html',
  styleUrls: ['./league-group.component.css']
})
export class LeagueGroupComponent implements OnInit {

  roundNumber = 0;
  @Input('showStandings') showStandings = false;
  @Input('leagueTournament') leagueTournament: LeagueTournament = <LeagueTournament>{};
  @Input('groupRounds') groupRounds : MatchRound[][] = [];
  @Input('groupNumber') groupNumber = 0;
  @Input('groupName') groupName = '';

  constructor() { }

  ngOnInit(): void {
  }

}
