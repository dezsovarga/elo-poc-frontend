import { Component, OnInit, Input } from '@angular/core';
import {Pagination} from "../../model/Pagination";
import {PlayersService} from "../../service/data/players.service";
import {Pot} from "../../model/Pot";

@Component({
  selector: 'app-tournament-creator',
  templateUrl: './tournament-creator.component.html',
  styleUrls: ['./tournament-creator.component.css']
})
export class TournamentCreatorComponent implements OnInit {

  @Input() pots: Pot[] = [];
  @Input() creatorId: string = '';

  pagination: Pagination = {
    pageNumber: 1,
    pageSize: 4,
  };

  constructor(private playerService:PlayersService) { }

  ngOnInit(): void {

  }

  removePlayerFromTournament(id: number) {

  }
}
