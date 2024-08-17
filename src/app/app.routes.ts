import { Routes } from '@angular/router';
import { PredictionsComponent } from './pages/predictions/predictions.component';
import { BetslipComponent } from './pages/betslip/betslip.component';
import { LivescoresComponent } from './pages/livescores/livescores.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FixturesComponent } from './pages/fixtures/fixtures.component';

export const routes: Routes = [
    { path: '', redirectTo: '/predictions', pathMatch: "full"},
    { path: 'fixtures', component: FixturesComponent },
    { path: 'predictions', component: PredictionsComponent },
    { path: 'livescores', component: LivescoresComponent },
    { path: 'betslip', component: BetslipComponent },
    { path: '**', component: PageNotFoundComponent}
];
