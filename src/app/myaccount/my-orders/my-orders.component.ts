import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders } from '../models/order.interface';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
selectedOrder:Orders;
selectedOrders:Orders[] = [];
myOrders:Orders[] = [
  {label:'books',id:1,items:3,delivery_type:'COD'},
  {label:'books',id:2,items:4,delivery_type:'COD'},
  {label:'cycle',id:'ORD123',items:1,delivery_type:'COD'},
  {label:'mobile',id:2,items:2,delivery_type:'Online'},
  {label:'laptop',id:5,items:1,delivery_type:'Online'},
  {label:'shirt',id:6,items:3,delivery_type:'COD'},
]
  constructor(private router:ActivatedRoute) { 
    this.router.params.subscribe((params)=>{
      console.log(params.id);
    this.selectedOrder = this.myOrders.find((x:Orders)=>x.id == params.id);
    console.log(this.selectedOrder)
//  let index =  this.myOrders.indexOf(this.selectedOrder);
//     this.myOrders[index]
//       this.filterType(params.id);
//     console.log(this.selectedOrder);
    })
    this.router.queryParamMap.subscribe((queryParams)=>{
      console.log(queryParams.get('id'))
      console.log(queryParams.get('type'))
      this.selectedOrders =this.myOrders.filter((x:Orders)=>x.id == queryParams.get('id') && x.delivery_type ==queryParams.get('type'));

      console.log(this.selectedOrders);
    })
  }
  filterType(id){
   // this.selectedOrder =this.myOrders.filter((x:Orders)=>x.delivery_type ==id);
  }
  ngOnInit(): void {
  }

}
