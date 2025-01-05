import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'; // LayoutComponent importieren

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent], // LayoutComponent registrieren
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Hinweis: styleUrl -> styleUrls korrigieren
})
export class AppComponent {
  title = 'wohnplattform';
}
