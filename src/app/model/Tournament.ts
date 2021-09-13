import {Player} from "../player-list/player-list.component";

export class Tournament {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public players: Player[]
  ) {

  }
}
