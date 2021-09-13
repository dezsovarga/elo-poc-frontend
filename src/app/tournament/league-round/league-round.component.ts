import {Component, Input, OnInit} from '@angular/core';
import {LeagueMatch} from "../../model/LeagueMatch";

@Component({
  selector: 'app-league-round',
  templateUrl: './league-round.component.html',
  styleUrls: ['./league-round.component.css']
})
export class LeagueRoundComponent implements OnInit {

  roundNumber = 0;
  @Input('matches') matches : LeagueMatch[] = <LeagueMatch[]>{};
  @Input('numberOfPlayers') numberOfPlayers : number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
