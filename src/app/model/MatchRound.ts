import {LeagueMatch} from "./LeagueMatch";

export class MatchRound {
  constructor(
    public matches: LeagueMatch[],
    public roundNumber: number
  ) {

  }
}
