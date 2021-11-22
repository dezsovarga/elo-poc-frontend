import {LeagueGroup} from "./LeagueGroup";
import {KnockoutStage} from "./KnockoutStage";

export class LeagueTournament {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public groups: LeagueGroup[],
    public knockoutStage: KnockoutStage
) {

  }
}
