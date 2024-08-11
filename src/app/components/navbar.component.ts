import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ MatBadgeModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive ],
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
              <li><a href="#" class="slip" routerLink="/betslip" routerLinkActive="activebutton" airaCurrentWhenActive="page">
                  <button mat-button >Betslip</button>
              </a></li>
              <li><a href="#" class="treble" routerLink="/treble" routerLinkActive="activebutton" airaCurrentWhenActive="page">
                  <button mat-button matBadge="new" matBadgePosition="after" >Tatu chafu</button>
              </a></li>
          </ul>
      </nav>
    </header>`,
  styles: `
  header {
    background-color: var(--color-just-black);
    min-height: 100px;
    // background-color: teal;
    margin: 25px 10px;
    display: flex;
    align-items: center;

    nav {
        display: flex;
        width: fit-content;
        align-item: center;
        min-height: 50px;

        ul {
            display: flex;
            flex-flow: row wrap;
            list-style-type: none;
            padding: 0px;
            margin: 0;
            align-item: center;
            
            li {
                margin: 5px 5px 7px;
            }
            li:first-child {
            margin-right: 15px
            
            }
        }

        button {
            color: var(--color-surface50) !important;
            font-size: 1rem;
            cursor: pointer;
            letter-spacing: .02em;
            transition: color .3s var(--ease-in-out-quart);
            // border-radius: 0;
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
            border-radius: 0;
            text-align: start;
        }

        .slip button {
            color: var(--color-lt-green) !important;
        }
        .treble button {
            color: var(--color-orangey) !important;
        }
    }
}
  
  `
})
export class NavbarComponent {

}
