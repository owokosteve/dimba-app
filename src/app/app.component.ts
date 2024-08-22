import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from "./containers/body/body.component";
import { HeaderComponent } from './containers/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {ngSkipHydration: 'true'},
  imports: [RouterOutlet, BodyComponent, HeaderComponent]
})
export class AppComponent {
  title = 'dimba-app';
}
