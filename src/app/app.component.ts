import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private date:DatePipe,private router:Router,protected DOM: DomSanitizer){

  }
  youtubeLink = 'https://www.youtube.com/embed/87fTHhPVdE4';
  yourName = 'Hi how are you';
  ngOnInit(){
    // this.today = this.date.transform(this.today,'full');
  }
  ngAfterViewInit(){
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(){
   // console.log('VIEW CHANGWED')
  }
  bypass(url){
    return this.DOM.bypassSecurityTrustResourceUrl(url);
  }
addto(){
  
}
  goToOrders(){
    this.router.navigate(['my-orders','COD'],{queryParams:{type:'Online'}});
  }
  style1 = true;
  title = 'angular-tour-of-heroes';
  show=true;
 // name =' Asik Gazi';
  today:any = new Date();
  oops=[
    {
      a: 'sagar',
      b: 25           
    },
    {
      a: 'ASik',
      b: 21
    },
    {
      a: 'Lokesh',
      b: 25           
    },
    {
      a: 'Aliva',
      b: 21
    },
    {
      a: 'Diksha',
      b: 21
    }
  ];
  afterGettingDate(event){
    console.log(event);
  }
  getDate(){
    let date = this.date.transform(this.today,'fullDate');
    console.log('Running');
    return date;
  }

  rkb()
  {
  //return this.name
  }
}
