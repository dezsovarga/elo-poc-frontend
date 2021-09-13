import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateTournamentComponent} from "./create-tournament/create-tournament.component";
import {RatingsComponent} from "./ratings/ratings.component";
import {TournamentsComponent} from "./tournaments/tournaments.component";
import {TournamentComponent} from "./tournament/tournament.component";

const routes: Routes = [
  { path: 'ratings', component: RatingsComponent  },
  { path: 'create-tournament', component: CreateTournamentComponent  },
  { path: 'tournaments', component: TournamentsComponent  },
  { path: 'tournament/:id', component: TournamentComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
