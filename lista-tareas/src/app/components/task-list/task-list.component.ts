import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @HostBinding('class') classes = 'container mt-4';

  tasks: Task[] = [
    { id: 1, title: 'Aprender Angular', completed: false },
    { id: 2, title: 'Practicar TypeScript', completed: false },
    { id: 3, title: 'Implementar Bootstrap', completed: true }
  ];

  newTaskTitle: string = '';

  addTask(taskInput: HTMLInputElement): void {
    if (taskInput.value.trim()) {
      const newTask: Task = {
        id: this.tasks.length + 1,
        title: taskInput.value.trim(),
        completed: false
      };
      this.tasks.push(newTask);
      taskInput.value = '';
    }
  }

  toggleTask(task: Task): void {
    task.completed = !task.completed;
  }
}
