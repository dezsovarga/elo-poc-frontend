import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import {HttpClientModule} from "@angular/common/http";
import { MatchRoundComponent } from './match-round/match-round.component';
import { HeaderComponent } from './header/header.component';
import { CreateTournamentComponent } from './create-tournament/create-tournament.component';
import { RatingsComponent } from './ratings/ratings.component';
import { TournamentCreatorComponent } from './create-tournament/tournament-creator/tournament-creator.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentComponent } from './tournament/tournament.component';
import { LeagueRoundComponent } from './tournament/league-round/league-round.component';
import { TournamentPotComponent } from './create-tournament/tournament-pot/tournament-pot.component';
import {NgxPaginationModule} from "ngx-pagination";
import { LeagueGroupComponent } from './tournament/league-group/league-group.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    MatchRoundComponent,
    HeaderComponent,
    CreateTournamentComponent,
    RatingsComponent,
    TournamentCreatorComponent,
    TournamentsComponent,
    TournamentComponent,
    LeagueRoundComponent,
    TournamentPotComponent,
    LeagueGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [PlayerListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
