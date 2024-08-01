import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo-service';
import { TodoAdd } from '../../models/todo-add';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent implements OnInit{
  todoForm=new FormGroup({
    content:new FormControl('')
  })

  constructor(private todoService:TodoService,private router:Router){}

  ngOnInit(): void {
    
  }
Add(){
  this.todoService.add(this.todoForm.value as TodoAdd).subscribe(x=>{
    if(x==true){
      this.router.navigateByUrl("/todos")
    }
  })
}




}
