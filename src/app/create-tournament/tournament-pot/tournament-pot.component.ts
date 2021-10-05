import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../player-list/player-list.component";
import {PlayersService} from "../../service/data/players.service";
import {Pot} from "../../model/Pot";

@Component({
  selector: 'app-tournament-pot',
  templateUrl: './tournament-pot.component.html',
  styleUrls: ['./tournament-pot.component.css']
})
export class TournamentPotComponent implements OnInit {

  @Input() pot: Pot = <Pot>{};

  constructor(private playerService:PlayersService) { }

  ngOnInit(): void {
  }


  addPlayerToTournament(id: number) {
    console.log(id);
    this.pot.playersWithCheckbox
      .forEach(playerCb => {
        if (playerCb.player.id === id) {
          playerCb.checked = !playerCb.checked;
          if (playerCb.checked) {
            this.playerService.addPlayerToTournament(id);
          } else {
            this.playerService.removePlayerFromTournament(id);
          }
        }
      });
  }
}
