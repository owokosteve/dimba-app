import { Injectable } from '@angular/core';
import { FIXTURES } from '../mock_fixtures';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {
  
  constructor() { }
  getTodayFixtures() {
    return FIXTURES;
  }
}
