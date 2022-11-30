import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodosService } from '../services/messages.service';

@Component({
  selector: 'main-component',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  private todosService = inject(TodosService);
  message$ = this.todosService.getMessage().result$;
}
