import { Component } from '@angular/core';
import { MainNavComponent } from '../../components/main-nav/main-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
