import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Player} from "../../player-list/player-list.component";
import {Match} from "../../match-round/match-round.component";
import {Subject} from "rxjs";
import {Pot} from "../../model/Pot";
import {PlayerWithCheckbox} from "../../model/PlayerWithCheckbox";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  addPlayerClicked: Subject<any> = new Subject();
  removePlayerClicked: Subject<any> = new Subject();

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

  getPot(playersWithCb: PlayerWithCheckbox[], potNumber: number, potSize: number) {
    playersWithCb.sort((x: PlayerWithCheckbox, y: PlayerWithCheckbox) => x.player.elo >y.player.elo ? 1 : -1).reverse();
    if (potSize === 0) {
      return playersWithCb;
    }
    return playersWithCb.filter((playerCb, index) => index > (potNumber-1) * 64/potSize -1 && index < potNumber * 64/potSize );
  }

  addPlayerToTournament(playerId: number) {
    this.addPlayerClicked.next({
      playerId: playerId,
    });
  }

  removePlayerFromTournament(playerId: number) {
    this.removePlayerClicked.next({
      playerId: playerId,
    });
  }

  getPlayerByIdFromPots(playerId: number, pots: Pot[]) {
    let playersWithCheckboxes: PlayerWithCheckbox[] = [];
    pots.forEach(pot => playersWithCheckboxes = playersWithCheckboxes.concat(pot.playersWithCheckbox));
    return playersWithCheckboxes.find(playerCb => playerCb.player.id === playerId);
  }
}
