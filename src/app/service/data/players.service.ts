import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Player} from "../../player-list/player-list.component";
import {Match} from "../../match-round/match-round.component";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(
    private http:HttpClient
  ) { }

  getAllPlayers() {
    return this.http.get<Player[]>("http://localhost:8080/api/player");
  }

  generateMatchRound() {
    return this.http.get<Match[]>("http://localhost:8080/api/matchRound");
  }

  getMatchScores(matches: Match[] | undefined) {
    return this.http.post<Match[]>("http://localhost:8080/api/matchScore",matches);
  }

  saveRatings(matches: Match[] | undefined) {
    return this.http.post<Player[]>("http://localhost:8080/api/rating",matches);
  }
}
