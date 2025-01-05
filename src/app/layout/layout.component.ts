import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true, // Falls du Standalone-Komponenten nutzt
  imports: [RouterOutlet], // RouterOutlet importieren
})
export class LayoutComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de'); // Standard-Sprache Deutsch
  }

  changeLanguage(lang: string) {
    this.translate.use(lang); // Sprache wechseln
  }
}
