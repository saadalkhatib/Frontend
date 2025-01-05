import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [RouterOutlet, TranslateModule], // TranslateModule hier hinzufügen
  standalone: true,
})
export class LayoutComponent {
  changeLanguage(lang: string) {
    localStorage.setItem('language', lang);
    window.location.reload();
  }
}
