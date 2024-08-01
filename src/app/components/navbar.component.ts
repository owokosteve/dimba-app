import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ MatButtonModule, MatIconModule, RouterLink, RouterLinkActive ],
  template: `
    <header>
      <nav>
          <ul>
              <li><a href="#" class="logo">
                  <button mat-button>DimbaTips</button>
              </a></li>
              <li><a href="#" routerLink="/predictions" routerLinkActive="activebutton" airaCurrentWhenActive="page">
                  <button mat-button>Predictions</button>
              </a></li>
              <li><a href="#" routerLink="/livescores" routerLinkActive="activebutton" airaCurrentWhenActive="page">
                  <button mat-button>Livescores</button>
              </a></li>
              <li><a href="#" routerLink="/betslip" routerLinkActive="activebutton" airaCurrentWhenActive="page">
                  <button mat-button>Betslip</button>
              </a></li>
          </ul>
      </nav>
    </header>`,
  styles: `
  header {
    height: 100%;
    nav {
        background-color: var(--color-just-black);
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--color-surface50);
        ul {
            display: flex;
            flex-flow: row wrap;
            list-style-type: none;
            padding: 0px;
            margin: 25px 0;
        }

        button {
            color: var(--color-surface50) !important;
            font-size: .975rem;
            cursor: pointer;
            letter-spacing: .02em;
            line-height: 1.05;
            transition: color .3s var(--ease-in-out-quart);
            margin-right: 10px;
        }

        button:hover {
            color: var(--color-orangey) !important;
            // border-bottom: 2px solid var(--color-surface50);
        }

        .activebutton button {
            color: var(--color-lilac) !important;
            border-bottom: 2px solid var(--color-surface50);
        }

        .logo button {
            color: var(--color-surface-white) !important;
            font-size: 1.4rem;
            font-weight: 600;
            border: none;
        }
    }
}
  
  `
})
export class NavbarComponent {

}
