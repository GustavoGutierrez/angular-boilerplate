import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todo.model';
import { RestService } from './rest.service';

@Injectable()
export class TodoService extends RestService {
  /**
   * Relative base current api
   */
  private relativeUrl = '/todos/';

  constructor(private _http: HttpClient) {
    super(_http);
  }

  public getAllTodos() {
    return this.get(this.relativeUrl);
  }

  public create(todo: Todo) {
    return this.post(this.relativeUrl, todo);
  }

  public read(id: number): Observable<Todo> {
    return this.get(`${this.relativeUrl}${id.toString()}`);
  }

  public update(todo: Todo) {
    return this.put(this.relativeUrl, todo);
  }

  public delete(id: number) {
    return this.del(`${this.relativeUrl}${id.toString()}`);
  }
}
