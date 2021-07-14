import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';



@NgModule({
  declarations: [MyProfileComponent, MyOrdersComponent],
  imports: [
    CommonModule
  ],
  exports:[MyProfileComponent]
})
export class MyaccountModule { }
