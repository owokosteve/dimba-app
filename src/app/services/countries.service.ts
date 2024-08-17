import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpContext, HttpContextToken } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { catchError, Observable, of, shareReplay, tap } from 'rxjs';

export const CACHING_ENABLED = new HttpContextToken<boolean>(() => false);

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url = 'https://api-football-v1.p.rapidapi.com/v3/countries';
  private options = {
    headers: {
      'x-rapidapi-key': '60c3d2bf89msh5b2ec8865814095p1d27fdjsnec89fba2ba8c',
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    },
    context: new HttpContext().set(CACHING_ENABLED, true),
  };
  private cacheKey = 'countriesCache';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  getCountries(): Observable<any> {
    if (isPlatformBrowser(this.platformId)){
    const cacheData = localStorage.getItem(this.cacheKey);
    if (cacheData) {
      console.log("Returning cached response from localStorage");
      return of(JSON.parse(cacheData))
    }
  }
    
    return this.http.get(this.url, this.options)
      .pipe(
        tap(response => {
          if (isPlatformBrowser(this.platformId)) {
            console.log("Caching response to localStorage");
            localStorage.setItem(this.cacheKey, JSON.stringify(response));
        }
        }),
        shareReplay(1),
        catchError(error => {
          console.error("Error fetching data", error);
          return of([]);
        })
      );
  }
}
