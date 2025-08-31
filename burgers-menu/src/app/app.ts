import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpecialburgersMenu } from './specialburgers-menu/specialburgers-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('burgers-menu');
}
