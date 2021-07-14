import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  constructor() { }
  lastTaskEntered = '';
  ngOnInit(): void {
  }
  gotTask(value){
    this.lastTaskEntered = value;
  }

}
