import {Component, Input, OnInit} from '@angular/core';
import {LeagueMatch} from "../../model/LeagueMatch";
import {MatchRound} from "../../model/MatchRound";

@Component({
  selector: 'app-league-round',
  templateUrl: './league-round.component.html',
  styleUrls: ['./league-round.component.css']
})
export class LeagueRoundComponent implements OnInit {

  roundNumber = 0;
  @Input('rounds') rounds : MatchRound[] = <MatchRound[]>{};


  constructor() { }

  ngOnInit(): void {
  }

}
