import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Country } from '../../containers/body/body.component';
import { CountriesService } from '../../services/countries.service';
import { LeaguesService } from '../../services/leagues.service';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatExpansionModule, MatAccordion, MatListModule, MatIconModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  readonly panelOpenState = signal(false);
  countries: Country[] = [];
  countriesService = inject(CountriesService);
  leagues: any[] = [];
  leagues1: any[] = [];
  currentLeaguesService = inject(LeaguesService);

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe(response => {
      for (let key in response) {
        if (key === "response") {
          this.countries = response[key];
          break;
        }
      }
      console.log(this.countries);
    });

    this.currentLeaguesService.getCurrentLeagues().subscribe(data => {
      for (let key in data) {
        if (key === 'response' ) {
          this.leagues1 = data[key];
          break;
        }
      }
      console.log(this.leagues)
    });
  }
}
