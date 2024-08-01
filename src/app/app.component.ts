import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { SideNavComponent } from "./components/container/side-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {ngSkipHydration: 'true'},
  imports: [RouterOutlet, NavbarComponent, SideNavComponent]
})
export class AppComponent {
  title = 'dimba-app';
}
