import { Component, OnInit } from '@angular/core';
import { TaskInterface } from 'src/app/models/task-interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  searchText = '';
  showForm = false;
  editForm = false;

  myTask: TaskInterface = {
    label: '',
    completed: false,
  };

  tasks: TaskInterface[] = [];
  resultTask : TaskInterface[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit() {
    this.getTasks();
  }
  getTasks() {
    this.taskService.findAll().subscribe((tasks) => {
      this.tasks = tasks;
      this.resultTask = tasks;
    });
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
      this.showForm = false;
    });
  }

  resetTask() {
    this.myTask = {
      label: '',
      completed: false,
    };
  }

  toggleCompleted(task: TaskInterface) {
    return this.taskService
      .completed(task.id, task.completed)
      .subscribe(() => (task.completed = !task.completed));
  }
  editTask(task: TaskInterface) {
    this.myTask = task;
    this.editForm = true;
  }
  updateTask() {
    return this.taskService.update(this.myTask).subscribe((task) => {
      this.resetTask();
      this.editForm = false;
    });
  }
  searchTasks() {
    this.resultTask = this.tasks.filter((task) =>
      task.label.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
