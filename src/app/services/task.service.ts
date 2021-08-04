import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// mock data
import { TASKS } from '../mock-tasks';
// interface
import { Task } from '../Task'


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const Tasks = of(TASKS);
    return Tasks;
  };
}
