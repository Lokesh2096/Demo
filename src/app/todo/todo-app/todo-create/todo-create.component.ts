import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/sharedServices/shared.service';


@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  currentTask='';
  @Output() sendData:EventEmitter<any> = new EventEmitter();
  constructor(private sharedService:SharedService) { }
  show = [{
    "id": 28,
    "Title": "Sweden"
  }, {
    "id": 56,
    "Title": "USA"
  }, {
    "id": 89,
    "Title": "England"
  }]

  changeTask(){
    if(this.currentTask){
    this.sendData.emit(this.currentTask)}
    this.currentTask = '';
  }
  ngOnInit(): void {
  }
 

}
