import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router,Event, NavigationStart, NavigationEnd } from '@angular/router';
import { SharedService } from './sharedServices/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  isLoggedIn = false;
  login:any;
  name:any;
  header:boolean = true;
  constructor(private date:DatePipe,private router:Router,protected DOM: DomSanitizer,public shared:SharedService){
    this.router.events.subscribe((event:Event)=>{
      if(event instanceof NavigationStart){
        console.log('Navigation Start',this.router.url);
      }else if(event instanceof NavigationEnd){
        if(this.router.url.includes('/my-orders')){
          this.header= false;
        }else{
          this.header = true;
        }
        console.log('NavigationEnd',this.router.url);
      }
    })




   this.shared.isLoggedin.subscribe((data)=>{
      console.log('In event Emitter');
      if(data){
        // api -> name

        this.isLoggedIn = true;
      }else{
        // api -> name
        this.isLoggedIn = false;
      }
    });
  }

  youtubeLink = 'https://www.youtube.com/embed/87fTHhPVdE4';
  yourName = 'Hi how are you';
  ngOnInit(){
    // this.today = this.date.transform(this.today,'full');
  }
  ngOnDestroy(){
   // this.login.unsubscribe();
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
    this.router.navigate(['my-orders','COD'],{queryParams:{type:'COD',id:2}});
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
