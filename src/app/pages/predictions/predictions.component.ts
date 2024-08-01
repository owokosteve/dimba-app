import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-predictions',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [],
  templateUrl: './predictions.component.html',
  styleUrl: './predictions.component.scss'
})
export class PredictionsComponent {
  
  constructor() {}

}

