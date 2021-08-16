import { Component, HostListener, OnInit,ViewChild } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  constructor() { }

  lastTaskEntered = '';
  @ViewChild(TodoListComponent)todoList:TodoListComponent;
  // @HostListener('click') myClick(){
  //   console.log('I clicked on my todo app')
  // }
  ngOnInit(): void {
  }
  gotTask(value){
    this.lastTaskEntered = value;
  }

  ngAfterViewInit(){
    console.log(this.todoList.taskList)
  }

  addTask(){
    this.todoList.taskList.push({id:1,isDone:false,taskName:'abcd'});
  }

}
