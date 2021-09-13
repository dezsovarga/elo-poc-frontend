import {Standing} from "./Standing";
import {LeagueMatch} from "./LeagueMatch";

export class LeagueTournament {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public standings: Standing[],
    public matches: LeagueMatch[]
) {

  }
}
