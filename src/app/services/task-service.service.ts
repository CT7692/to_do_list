import { Injectable } from '@angular/core';
import { Task } from '../entities/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  tasks: Task[] = [];
  // constructor() { }

  getTasks(): Task[]{
    return this.tasks;
  }
}
