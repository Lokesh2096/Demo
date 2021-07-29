import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  categories = [
    {category_id:1,name:'Gold Jewelleries'},
    {category_id:2,name:'Diamond Jewelleries'},
    {category_id:3,name:'Platinum Jewelleries'},
    {category_id:17,name:'Gold Chains'}
  ]
  ngOnInit(): void {
  }

}
