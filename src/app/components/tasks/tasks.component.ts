import { Component, OnInit } from '@angular/core';
import { TaskInterface } from 'src/app/models/task-interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  myTask: TaskInterface = {
    label: '',
    completed: false,
  };
  tasks: TaskInterface[] = [];

  constructor(private taskService: TaskService) {}
  ngOnInit() {
    this.getTasks();
  }
  getTasks() {
    this.taskService.findAll().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(id: any) {
    this.taskService.delete(id).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id != id);
    });
  }

  persistTask() {
    return this.taskService.persist(this.myTask).subscribe((task) => {
      this.tasks = [task, ...this.tasks];
      this.resetTask();
    });
  }

  resetTask() {
    this.myTask = {
      label: '',
      completed: false,
    };
  }
}
