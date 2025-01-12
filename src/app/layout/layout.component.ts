import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true, // Standalone-Komponente
  imports: [RouterModule, TranslateModule] // RouterModule und TranslateModule hinzufügen
})
export class LayoutComponent {
  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('language') || 'de';
    this.translate.use(lang);
  }

  changeLanguage(lang: string) {
    localStorage.setItem('language', lang);
    this.translate.use(lang);
  }
}
