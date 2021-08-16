import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  scrHeight = window.innerHeight;
  scrWidth = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
    console.log(this.scrHeight,this.scrWidth);
  }
  constructor() {
   // localStorage.setItem('Abcd','Egfh');
   }
  categories = [
    {category_id:1,name:'Gold Jewelleries'},
    {category_id:2,name:'Diamond Jewelleries'},
    {category_id:3,name:'Platinum Jewelleries'},
    {category_id:17,name:'Gold Chains'}
  ]
  ngOnInit(): void {
  }

}
