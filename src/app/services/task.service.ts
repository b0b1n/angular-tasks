import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskInterface } from '../models/task-interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }
  findAll(){
    return this.http.get<TaskInterface[]>("http://localhost:5000/tasks")
  }
  find(id: number){
    return this.http.get<TaskInterface>("http://localhost:5000/tasks/"+id)
  }
}
