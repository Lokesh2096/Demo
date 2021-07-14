import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../models/order.interface';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
selectedOrder:Orders[];
myOrders:Orders[] = [
  {label:'books',id:1,items:3,delivery_type:'COD'},
  {label:'books',id:2,items:4,delivery_type:'COD'},
  {label:'cycle',id:'ORD123',items:1,delivery_type:'COD'},
  {label:'mobile',id:4,items:2,delivery_type:'COD'},
  {label:'laptop',id:5,items:1,delivery_type:'Online'},
  {label:'shirt',id:6,items:3,delivery_type:'COD'},
]
  constructor(private router:ActivatedRoute) { 
    this.router.params.subscribe((params)=>{
      console.log(params.id);
  //  this.selectedOrder = this.myOrders.find((x:Orders)=>x.id == params.id);
//  let index =  this.myOrders.indexOf(this.selectedOrder);
    // this.myOrders[index]
    //   this.filterType(params.id);
    // console.log(this.selectedOrder);
    })
    this.router.queryParamMap.subscribe((queryParams)=>{
      console.log(queryParams.get('id'))
      console.log(queryParams.get('type'))
      this.selectedOrder =this.selectedOrder.filter((x:Orders)=>x.id == queryParams.get('id'));

      console.log(this.selectedOrder);
    })
  }
  filterType(id){
    this.selectedOrder =this.myOrders.filter((x:Orders)=>x.delivery_type ==id);
  }
  ngOnInit(): void {
  }

}
