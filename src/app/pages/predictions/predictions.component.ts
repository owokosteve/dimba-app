import { Component, inject } from '@angular/core';
import { FixturesService } from '../../services/fixtures.service';
import { MatTabsModule } from '@angular/material/tabs';
import { PredictionsListComponent } from '../../components/predictions-list/predictions-list.component';

@Component({
  selector: 'app-predictions',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [ PredictionsListComponent, MatTabsModule, ],
  templateUrl: './predictions.component.html',
  styleUrl: './predictions.component.scss'
})
export class PredictionsComponent {

  private todayIsoDate: Date = new Date();
  private today!: string;

  private yesterdayIsoDate!: Date;
  private yesterday!: string;

  private tommorowIsoDate!: Date;
  private tommorow!: string;

  defaultTabIndex = 1;
  fixtures = inject(FixturesService);

  todayFixtures: any[] = [];
  tommorowFixtures: any[] = [];
  yesterdayFixtures: any[] = [];

  constructor() {
    // Today's Date object
    this.today = this.todayIsoDate.toISOString().split('T')[0];

    // Date object for yesterday
    this.yesterdayIsoDate = new Date(this.today);
    this.yesterdayIsoDate.setUTCDate(this.yesterdayIsoDate.getUTCDate() - 1);
    this.yesterday = this.yesterdayIsoDate.toISOString().split('T')[0];

    // Date object for tommorow
    this.tommorowIsoDate = new Date(this.today);
    this.tommorowIsoDate.setUTCDate(this.tommorowIsoDate.getUTCDate() + 1);
    this.tommorow = this.tommorowIsoDate.toISOString().split('T')[0];
  }
  
  ngOnInit() {
    this.fixtures.getFixturesByDate(this.today).subscribe(response => {
      for (let key in response) {
        if (key === 'response') {
          this.todayFixtures = response[key];
          break;
        }
      }
    });
    console.log(this.today);
    
    this.fixtures.getFixturesByDate(this.yesterday).subscribe(response => {
      for (let key in response) {
        if (key === 'response') {
          this.yesterdayFixtures = response[key];
          break;
        }
      }
    });
    console.log(this.yesterday);

    this.fixtures.getFixturesByDate(this.tommorow).subscribe(response => {
      for (let key in response) {
        if (key === 'response') {
          this.tommorowFixtures = response[key];
          break;
        }
      }
    });
    console.log(this.tommorow);
  }
}

