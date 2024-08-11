import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FixturesService } from '../../services/fixtures.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-predictions',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [MatTabsModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './predictions.component.html',
  styleUrl: './predictions.component.scss'
})
export class PredictionsComponent {
  defaultTabIndex = 1;
  displayedColumns: string[] = ['name', 'probability', 'prediction', 'score', 'result'];
  dataSource: any[] = inject(FixturesService).getTodayFixtures();
  
  constructor() {}
  
  ngOnInit() {
    console.log(this.dataSource);
  }
}

