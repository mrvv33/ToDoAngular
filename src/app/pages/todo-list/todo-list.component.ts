import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todoList:Todo[]=[];
  constructor(private todoService:TodoService){}
  ngOnInit(): void {
    this.load();
  }
  load()
  {
    this.todoService.getAll().subscribe(x=>this.todoList=x);
  }
delete(id:number){
  this.todoService.delete(id).subscribe(x=>{
    if(x==true){
      this.load();
    }
    else{
      alert("Todo silinemedi");
    }

  })
}
isCompleted(id:number){
  this.todoService.isCompleted(id).subscribe(x=>{
    if(x==true){
      let index=this.todoList.findIndex(x=>x.id==id);
      this.todoList[index].isCompleted=!this.todoList[index].isCompleted
    }
  })
}
}
