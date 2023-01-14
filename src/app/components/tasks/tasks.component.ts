import { Component, OnInit } from '@angular/core';
import { TaskInterface } from 'src/app/models/task-interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: TaskInterface[] = [];

  constructor(private taskService: TaskService) {}
  ngOnInit() {
    this.getTasks();
  }
  getTasks() {
    this.taskService.findAll().subscribe((tasks) => (this.tasks = tasks));
  }
}
