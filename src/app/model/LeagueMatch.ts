import {Player} from "../player-list/player-list.component";

export class LeagueMatch {
  constructor(
    public player1: Player,
    public player2: Player,
    public score1: number,
    public score2: number,
    public roundNumber: number
  ) {

  }
}
