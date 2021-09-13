import { Component, OnInit } from '@angular/core';
import {TournamentService} from "../service/data/tournament.service";
import {Router} from "@angular/router";
import {Tournament} from "../model/Tournament";

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {

  tournaments: Tournament[] | undefined

  constructor(
    private tournamentService:TournamentService,
    private router: Router
) { }

  ngOnInit(): void {
    this.refreshPlayersList();
  }

  refreshPlayersList() {
    this.tournamentService.getAllTournaments().subscribe(
      response => {
        console.log(response);
        this.tournaments = response;
      }
    )
  }

  showTournament(id: any) {
    this.router.navigate(['tournament', id])
  }
}
