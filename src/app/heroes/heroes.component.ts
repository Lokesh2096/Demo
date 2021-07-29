import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { SharedService } from '../sharedServices/shared.service';
import { map, catchError } from 'rxjs/operators';
import { UserListurl } from '../config';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private shared:SharedService) { 
  }
  orders:any;
  orders$:Observable<any[]>;
  orders2:Subscription;
  ngOnInit(): void {
    this.orders$ = this.shared.getOrderRequest();
    this.getOrders();
 this.orders2 = this.shared.getOrderRequest().subscribe((res)=>{
      this.orders =res;
      console.log(res);
     },
     (err)=>{
     console.log(err)
     } )
    // this.shared.Get(UserListurl).then(
    //   (data)=>{
    //     this.orders =data;
    //   }
    // ).catch(
    //   (data)=>{
    //     this.orders =data;
    //   }
    // );
   //this.orders =  this.activatedRoute.snapshot.data['order'];
  //  this.orders.map((data)=>{
  //    data['keyname'] = 'ANONYMOUS';
  //    data['email'] = 'lokeshkumar2096@gmail.com';
  //    return data;
  //  })
  //  console.log(this.orders);
  }

async getOrders(){
    // this.shared.Get(UserListurl).then(
    //     (data)=>{
    //       this.orders =data;

          
    //     }
    //   ).catch(
    //     (data)=>{
    //       this.orders =data;
    //     }
    //   );
    this.orders = await this.shared.Get(UserListurl);

    console.log(this.orders);
  }

  openComponetAgain(){
    this.shared.openFormComponent();
  }
  closeModal(){
    this.shared.closeModal();
  }

  ngOnDestroy(){
    if(this.orders2){
       this.orders2.unsubscribe();
    }
  }

}
