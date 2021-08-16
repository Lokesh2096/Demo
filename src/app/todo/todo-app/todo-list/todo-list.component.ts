import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ToDo } from '../todo-interface/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() giveTask = '';
  taskList:ToDo[] = [];
  style: "line-through" | "none" = "none";
  taskDone:ToDo[] = [];
  taskNotDone:ToDo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  changeStyle(isDone){
    if(isDone){
      this.style = "line-through";
    }else{
      this.style = "none";
    }
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    if(this.giveTask){
      this.taskList.push({id:this.taskList.length,isDone:false,taskName:this.giveTask});
      console.log(this.taskList);
      this.taskNotDone = this.taskList.filter((x:ToDo)=>x.isDone == false);
    }
  }
  checkTask(id){
    let task = this.taskList.find((x:ToDo)=>x.id == id);
    if(task){
     let index = this.taskList.indexOf(task);
     if(index != -1){
      this.taskList[index].isDone = !this.taskList[index].isDone;
    //  this.changeStyle(this.taskList[index].isDone);
     }
    }
    this.taskDone = this.taskList.filter((x:ToDo)=>x.isDone == true);
    this.taskNotDone = this.taskList.filter((x:ToDo)=>x.isDone != true);
  }

}
