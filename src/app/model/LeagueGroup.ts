import {Standing} from "./Standing";
import {LeagueMatch} from "./LeagueMatch";

export class LeagueGroup {
  constructor(
    public standings: Standing[],
    public matches: LeagueMatch[]
  ) {

  }
}
