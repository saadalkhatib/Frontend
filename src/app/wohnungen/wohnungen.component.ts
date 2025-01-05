import { Component } from '@angular/core';

@Component({
  selector: 'app-wohnungen',
  templateUrl: './wohnungen.component.html',
  styleUrls: ['./wohnungen.component.css']
})
export class WohnungenComponent {
  angebote = [
    {
      bild: 'https://via.placeholder.com/300x200',
      titel: 'Moderne Wohnung in der Innenstadt',
      beschreibung: '2 Schlafzimmer, 1 Badezimmer, 80 m². Preis: 1200€/Monat',
      link: '#'
    },
    {
      bild: 'https://via.placeholder.com/300x200',
      titel: 'Gemütliche Wohnung am Stadtrand',
      beschreibung: '3 Schlafzimmer, 2 Badezimmer, 120 m². Preis: 950€/Monat',
      link: '#'
    },
    {
      bild: 'https://via.placeholder.com/300x200',
      titel: 'Luxus-Apartment mit Balkon',
      beschreibung: '4 Schlafzimmer, 3 Badezimmer, 200 m². Preis: 3000€/Monat',
      link: '#'
    }
  ];
}
