import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/sharedServices/shared.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
@Input('giveName') name = '';
@Output('getDate') throwDate:EventEmitter<any> = new EventEmitter();
show = true;
id:number;
data:any;
  constructor(private router:ActivatedRoute,private shared:SharedService,private http:HttpClient) {
    
    this.router.params.subscribe(data=>{
      
     this.id = this.shared.getCategoryId(data.name);
     this.getdata()
    //  console.log(data.name)
    })
   }
   getdata(){
    this.shared.openFormComponent()
    this.http.post('https://api.savyajewelsbusiness.com/api/subcategory',{"category_id":this.id}).subscribe(data=>{
      this.data = data;
      this.shared.closeModal();
      console.log(data);
    })
   }
  ngOnInit(): void {
  }

  ngOnChanges(){
    
    this.show = !this.show;
  }
  today(){
    this.throwDate.emit(new Date())
  }


}
