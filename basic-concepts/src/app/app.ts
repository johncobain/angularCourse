import { Component, signal } from '@angular/core';
import { Calculadora } from './calculadora/calculadora';

@Component({
  selector: 'app-root',
  imports: [Calculadora],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('basic-concepts');
}
