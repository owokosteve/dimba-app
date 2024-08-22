import { HttpClient, HttpContext, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  private leaguesUrl = "https://api-football-v1.p.rapidapi.com/v3/leagues";
  private baseHeaders = new HttpHeaders()
    .set('x-rapidapi-key', '60c3d2bf89msh5b2ec8865814095p1d27fdjsnec89fba2ba8c')
    .set('x-rapidapi-host', 'api-football-v1.p.rapidapi.com')

  constructor(private http: HttpClient) { }

  getCurrentLeagues(): Observable<any> {
    return this.http.get<any>(this.leaguesUrl, {
      headers: this.baseHeaders,
      params: new HttpParams().set('current', 'true')
        .set('type', 'league')
        .set('season', '2024'),

      context: new HttpContext(),
      observe: 'body'
    })
      .pipe(
        tap(() => console.log("Current leagues successfully got")),
        shareReplay(1)
      );
  }
}
