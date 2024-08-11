import { ChangeDetectorRef, Component, inject, Inject, Input, OnDestroy, Output } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav"
import { RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { CountriesService } from '../../services/countries.service';

export interface Country {
  code : string,
  flag : string,
  name : string
}

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, FormsModule, MatListModule, MatIconModule, MatButtonModule, MatToolbarModule, MatCheckboxModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  events: string[] = [];
  opened!: boolean;
  countries: Country[] = [];
  countriesService = inject(CountriesService);
  message = "";
  handleToggle!: boolean;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.handleToggle = !this.mobileQuery.matches;
  }

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
  }

  // ngOnInit(): void {
  //   this.leaguesService.getLeagues().subscribe(data => {
  //     for (let key in data) {
  //       if(key === 'response') {
  //         this.leagues = data[key];
  //         break;
  //       }
  //     }
  //     // this.leagues = data;
  //     console.log(this.leagues);
  //   });
  // }
 
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
