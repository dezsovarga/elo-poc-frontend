import { Component, OnInit, Input } from '@angular/core';
import {Player} from "../../player-list/player-list.component";

@Component({
  selector: 'app-tournament-creator',
  templateUrl: './tournament-creator.component.html',
  styleUrls: ['./tournament-creator.component.css']
})
export class TournamentCreatorComponent implements OnInit {

  highlightedRow = 1;
  @Input() players: Player[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  clickedRow(i: number) {
    console.log(i);
    this.highlightedRow = i;
  }
}
