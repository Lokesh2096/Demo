import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/sharedServices/shared.service';


@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  currentTask='';
  @Output() getTask:EventEmitter<any> = new EventEmitter();
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
  ngOnInit(): void {
  }
  sendTask(){
    if(this.currentTask){
      this.getTask.emit(this.currentTask);
      this.currentTask='';
      this.sharedService.onSuccess('Task Created','Task Created Successfully !');
    }else{
      this.sharedService.onFail('Enter Task','Please Enter a Task');
    }
  }

}
