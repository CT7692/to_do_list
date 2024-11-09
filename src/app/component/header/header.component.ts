import { Component } from '@angular/core';
import { Task } from '../../entities/task';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  task: Task = {}
  tasks: Task[] = [];
  addTaskForm: FormGroup;
  
  constructor(private fb: FormBuilder, private taskService: TaskServiceService) {
    this.addTaskForm = this.fb.group({
      description: [null, [Validators.required]],
      completed: false
    });

    this.tasks = this.taskService.getTasks();
  }

  get description(){
    return this.addTaskForm.get('description');
  }

  get completed(){
    return this.addTaskForm.get('completed');
  }

  onAddHandler(task: Task){
    task = this.addTaskForm.value;
    this.tasks.push(task);
  }
  
}