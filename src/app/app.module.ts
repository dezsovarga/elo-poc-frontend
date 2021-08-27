import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    MatchRoundComponent,
    HeaderComponent,
    CreateTournamentComponent,
    RatingsComponent,
    TournamentCreatorComponent,
    TournamentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PlayerListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
