import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoUpdate } from '../../models/todo-update';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrl: './todo-update.component.css'
})
export class TodoUpdateComponent implements OnInit{
  todoForm= new FormGroup({
    content:new FormControl(''),
    id: new FormControl(0)
  })
  id:number|undefined;
constructor(private todoService:TodoService, private router:Router,private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    debugger;
    this.id= Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.todoService.get(this.id).subscribe(x=>{

      this.todoForm.get('content')?.setValue(x.content);
      this.todoForm.get('id')?.setValue(x.id);
    }
      
    )
    
}

Update(){
  this.todoService.update(this.todoForm.value as TodoUpdate).subscribe(x=>{
    if(x==true){
      this.router.navigateByUrl("/todos");
    }
    else{
      alert("güncelleme gerçekleşemedi.");
    }
  })
}


}
