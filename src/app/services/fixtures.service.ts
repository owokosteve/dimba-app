import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {
  
  private fixturesUri = 'https://api-football-v1.p.rapidapi.com/v3/fixtures';
  private baseHeaders = new HttpHeaders()
    .set('x-rapidapi-key', '60c3d2bf89msh5b2ec8865814095p1d27fdjsnec89fba2ba8c')
    .set('x-rapidapi-host', 'api-football-v1.p.rapidapi.com')

  constructor(private http: HttpClient) { }

  // getFixtures(dateString: string): Observable<any> {
  //   return this.http.get(this.fixturesUri, {
  //     observe: 'body',
  //     context: new HttpContext(),
  //     headers: this.baseHeaders,
  //     params: new HttpParams().set('date', dateString)
  //   })
  //   .pipe(
  //       tap(() => console.log(`Fixtures for date: ${dateString} retrieved successfully`)),
  //       shareReplay(1)
  //     );
  // }
}
