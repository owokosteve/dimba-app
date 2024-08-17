import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, shareReplay, tap } from 'rxjs';
// import { LEAGUES } from '../mock_leagues';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  
  private apiUrl = "https://api-football-v1.p.rapidapi.com/v3/leagues";
  private options = {
    method: 'get',
    headers: {
      'x-rapidapi-key': '60c3d2bf89msh5b2ec8865814095p1d27fdjsnec89fba2ba8c',
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    }
  };
  constructor(private http: HttpClient) { }
  
  getLeagues(): Observable<any>{
      return this.http.get<any>(this.apiUrl, this.options)
      .pipe(
        tap(() => console.log("Success moja safi")),
        shareReplay()
      );
    }
}
