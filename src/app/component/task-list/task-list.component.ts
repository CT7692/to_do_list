import { Component } from '@angular/core';
import { Task } from '../../entities/task';
import { CommonModule } from '@angular/common';
import { TaskServiceService } from '../../services/task-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks: Task[] = [];

  constructor(private taskService: TaskServiceService){
    this.tasks = this.taskService.getTasks();
  }
}
