import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Match} from "../../match-round/match-round.component";
import {Player} from "../../player-list/player-list.component";
import {Tournament} from "../../create-tournament/create-tournament.component";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(
    private http:HttpClient
  ) { }

  saveTournament(tournament: Tournament | undefined) {
    return this.http.post<Tournament>("http://localhost:8080/api/tournament",tournament);
  }
}
