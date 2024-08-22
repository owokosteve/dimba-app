import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav"
import { RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';

export interface Country {
  code : string,
  flag : string,
  name : string
}

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [SideNavComponent, RouterOutlet, MatSidenavModule, FormsModule, MatIconModule, MatButtonModule, MatToolbarModule, MatCheckboxModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  events: string[] = [];
  opened!: boolean;
  
  message = "";
  handleToggle!: boolean;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.handleToggle = !this.mobileQuery.matches;
  }
 
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
