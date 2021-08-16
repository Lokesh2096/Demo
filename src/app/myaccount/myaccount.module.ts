import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AccountComponent } from './account/account.component';
import { MyoffersComponent } from './myoffers/myoffers.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MyProfileComponent, MyOrdersComponent, AccountComponent, MyoffersComponent, MywishlistComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[MyProfileComponent]
})
export class MyaccountModule { }
