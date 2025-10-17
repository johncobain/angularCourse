import { Component, signal } from '@angular/core';
import { HelloWorldComponent } from './helloWorld/helloWorld.component';
import { MinhaPagina } from './minha-pagina/minha-pagina';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, MinhaPagina],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('basic-concepts');
}
