import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MyOrdersComponent } from './myaccount/my-orders/my-orders.component';
import { MyProfileComponent } from './myaccount/my-profile/my-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // {

  // },
  {
    path: '', component: HeroesComponent
  },
  {
    path: 'mytodo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  // {
  //   path: 'mytodo', component: TodoAppComponent
  // },
  {
    path: 'profile', component: MyProfileComponent
  },
  {
    path: 'my-orders/:id', component: MyOrdersComponent
  },
  {
    path: 'hereos', pathMatch:'full',redirectTo:''
  },
  {
    path: '**',pathMatch:'full', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
