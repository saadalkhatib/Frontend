import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Standalone Component
  imports: [RouterModule] // Import notwendiger Module
})
export class AppComponent {}
