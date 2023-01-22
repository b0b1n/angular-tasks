import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskInterface } from '../models/task-interface';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  myUrl = "http://localhost:5000/tasks";

  constructor(private http : HttpClient) { }
  findAll(){
    return this.http.get<TaskInterface[]>(this.myUrl)
  }
  getContent(id: number){
    return this.http.get<TaskInterface>(`${this.myUrl}/${id}`)
  }
  delete(id:string){
    return this.http.delete(`${this.myUrl}/${id}`)
  }
  persist(task: any){
    return this.http.post<TaskInterface>(this.myUrl , task);
  }
  completed(id: any, completed : boolean){
    return this.http.patch<TaskInterface>(`${this.myUrl}/${id}`, completed = !completed)
  }


  update(task: TaskInterface){
    return this.http.put<TaskInterface>(`${this.myUrl}/${task.id}`, task)
  }

}
