import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
@Input('giveName') name = '';
@Output('getDate') throwDate:EventEmitter<any> = new EventEmitter();
show = true;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.show);
    this.show = !this.show;
  }
  today(){
    this.throwDate.emit(new Date())
  }


}
