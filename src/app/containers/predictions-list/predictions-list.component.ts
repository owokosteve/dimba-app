import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-predictions-list',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './predictions-list.component.html',
  styleUrl: './predictions-list.component.scss'
})
export class PredictionsListComponent {
  
  displayedColumns: string[] = ['name', 'probability', 'prediction', 'score', 'result'];
  @Input() dataSource: any[] = [];

  constructor() {}
  
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString();
  }
}
