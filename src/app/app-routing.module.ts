import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CreateTournamentComponent} from "./create-tournament/create-tournament.component";
import {PlayerListComponent} from "./player-list/player-list.component";
import {RatingsComponent} from "./ratings/ratings.component";
import {TournamentsComponent} from "./tournaments/tournaments.component";

const routes: Routes = [
  { path: 'ratings', component: RatingsComponent  },
  { path: 'create-tournament', component: CreateTournamentComponent  },
  { path: 'tournaments', component: TournamentsComponent  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
