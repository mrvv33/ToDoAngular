import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoAdd } from '../models/todo-add';
import { map } from 'rxjs';
import { TodoUpdate } from '../models/todo-update';
import { environment } from '../../environments/environment';
import id from '@angular/common/locales/id';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  //dependency injection

  constructor(private http:HttpClient,@Inject('BASE_API_URL') private baseUrl:string) { }

getAll(){
  return this.http.get<Todo[]>(`${environment.baseUrl}/api/todos`)
}
get(id:number)
{
  return this.http.get<Todo>(`${environment.baseUrl}/api/todos/${id}`)
}
add(todo:TodoAdd){
  return this.http.post<Response>(`${environment.baseUrl}/api/todos`,todo,{observe:'response'}).pipe(map(
    (response)=>response.status==201
  ))
}
delete(id:number){
  return this.http.delete<Response>(`${environment.baseUrl}/api/todos/${id}`,{observe:'response'}).pipe(map(
    (response)=>response.status==204
  ))
}
update(todo:TodoUpdate){
 
  return this.http.put<Response>(`${environment.baseUrl}/api/todos/${todo.id}`,todo,{observe:'response'}).pipe(map(
    (response)=>response.status==204
  ))
}
isCompleted(id:number){
  return this.http.put<Response>(`${environment.baseUrl}/api/todos/isCompleted/${id}`,{},{observe:'response'}).pipe(map(
    (response)=>response.status==204
  ))
}


}
