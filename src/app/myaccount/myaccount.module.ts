import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AccountComponent } from './account/account.component';
import { MyoffersComponent } from './myoffers/myoffers.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoggedinGuard } from '../loggedin.guard';



@NgModule({
  declarations: [MyProfileComponent, MyOrdersComponent, AccountComponent, MyoffersComponent, MywishlistComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
      path: '', component: AccountComponent,
      children:[
        {    path: '', redirectTo:'profile',pathMatch:'full' },
        {    path: 'orders', component: MyOrdersComponent},
        {    path: 'offers', component: MyoffersComponent},
        {    path: 'wishlist', component: MywishlistComponent},
        {    path: 'profile', component: MyProfileComponent},
      ]
      
    }
  ])
  ],
  exports:[MyProfileComponent]
})
export class MyaccountModule { }
