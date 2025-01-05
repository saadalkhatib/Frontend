import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { WohnungenComponent } from './wohnungen/wohnungen.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AnmeldenComponent } from './anmelden/anmelden.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent }, // Startseite
  { path: 'wohnungen', component: WohnungenComponent },
  { path: 'ueber-uns', component: UeberUnsComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'anmelden', component: AnmeldenComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Fallback für ungültige Routen
];
