import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentModules } from './shared/shared.module';

@Component({
  selector: 'drs-root',
  standalone: true,
  imports: [RouterOutlet, ComponentModules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'drs-brazil';
}
