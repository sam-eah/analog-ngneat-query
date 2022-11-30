import { AsyncPipe, CurrencyPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { MainComponent } from '../components/main.component';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [NgForOf, CurrencyPipe, AsyncPipe, MainComponent],
  template: ` <main-component></main-component> `,
})
export default class RootComponent {}
