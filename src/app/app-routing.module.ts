import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandeactivateGuard } from './candeactivate.guard';
import { ReactiveTrailComponent } from './form-practice/reactive-trail/reactive-trail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AccountComponent } from './myaccount/account/account.component';
import { MyOrdersComponent } from './myaccount/my-orders/my-orders.component';
import { OrderResolverService } from './myaccount/my-orders/services/order-resolver.service';
import { MyProfileComponent } from './myaccount/my-profile/my-profile.component';
import { MyoffersComponent } from './myaccount/myoffers/myoffers.component';
import { MywishlistComponent } from './myaccount/mywishlist/mywishlist.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: 'myaccount', component: AccountComponent,
    children:[
      {    path: '', redirectTo:'profile',pathMatch:'full' },
      {    path: 'orders', component: MyOrdersComponent, canActivate:[CanactivateGuard]},
      {    path: 'offers', component: MyoffersComponent, canActivate:[CanactivateGuard] },
      {    path: 'wishlist', component: MywishlistComponent, canActivate:[CanactivateGuard] },
      {    path: 'profile', component: MyProfileComponent, canActivate:[CanactivateGuard] },
    ]
    
  },
  {    path: 'rec-forms', component: ReactiveTrailComponent},
  {
    path: '', component: ReactiveTrailComponent
    //HeroesComponent
  },
  {
    path: 'mytodo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  // {
  //   path: 'mytodo', component: TodoAppComponent
  // },
  {
    path: 'profile/:name', component: MyProfileComponent
  },
  {
    path: 'my-orders/:id', component: MyOrdersComponent
  },
  {
    path: 'hereos', pathMatch:'full',component:HeroesComponent,resolve:{order:OrderResolverService}
  },
  {
    path: '**', component: NotFoundComponent
    //,canDeactivate:[CandeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
