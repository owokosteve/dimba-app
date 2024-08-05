import { Component, inject } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-predictions',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [MatDividerModule, MatTableModule],
  templateUrl: './predictions.component.html',
  styleUrl: './predictions.component.scss'
})
export class PredictionsComponent {
  dataSource: any[] = [];
  constructor() {}
}

