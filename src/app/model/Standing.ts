import {Player} from "../player-list/player-list.component";

export class Standing {
  constructor(
    public player: Player,
    public playedGames: number,
    public wins: number,
    public draws: number,
    public losses: number,
    public goalsFor: number,
    public goalsAgainst: number,
    public points: number,
  ) {

  }
}
