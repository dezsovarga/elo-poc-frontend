import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tournament} from "../../model/Tournament";
import {LeagueTournament} from "../../model/LeagueTournament";
import {LeagueMatch} from "../../model/LeagueMatch";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(
    private http:HttpClient
  ) { }

  saveTournament(tournament: Tournament | undefined) {
    return this.http.post<Tournament>("http://localhost:8080/api/tournament",tournament);
  }

  getAllTournaments() {
    return this.http.get<Tournament[]>(`http://localhost:8080/api/tournament`);
  }

  getTournament(id:number) {
    return this.http.get<LeagueTournament>(`http://localhost:8080/api/tournament/${id}`);
  }

  playTournamentMatches(tournamentId: number, matches: LeagueMatch[]) {
    return this.http.post<LeagueTournament>(`http://localhost:8080/api/tournament/${tournamentId}/play-matches`,matches);
  }

  resetTournament(tournamentId: number) {
    return this.http.post<LeagueTournament>(`http://localhost:8080/api/tournament/${tournamentId}/reset`,{});
  }
}
