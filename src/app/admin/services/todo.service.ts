import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task.model';
import { BaseService } from './base.service';

@Injectable()
export class TodoService extends BaseService {
  /**
   * Relative base current api
   */
  private relativeUrl = 'tasks';

  constructor(private _http: HttpClient) {
    super(_http);
  }

  public getAllTodos() {
    return this.get(this.relativeUrl);
  }

  public create(todo: Task) {
    const data = {
      "fields": {
          "title": {
              "stringValue": todo.title
          },
          "isCompleted": {
              "booleanValue": false
          }
      }
  }
    return this.post(this.relativeUrl, data);
  }

  public read(id: number): Observable<Task> {
    return this.get(`${this.relativeUrl}${id.toString()}`);
  }

  public update(todo: Task) {
    return this.put(this.relativeUrl, todo);
  }

  public delete(id: number) {
    return this.del(`${this.relativeUrl}${id.toString()}`);
  }
}

