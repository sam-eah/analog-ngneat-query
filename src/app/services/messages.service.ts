import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UseQuery } from '@ngneat/query';
import { IMessage } from '../interfaces/message.interface';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private http = inject(HttpClient);
  private useQuery = inject(UseQuery);

  getMessage() {
    return this.useQuery(['message'], () => {
      return this.http.get<IMessage>('/api/v1/hello');
    });
  }
}
