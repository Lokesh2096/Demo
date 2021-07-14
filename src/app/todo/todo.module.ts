import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoListComponent } from './todo-app/todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-app/todo-create/todo-create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TodoAppComponent, TodoListComponent, TodoCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '', component: TodoAppComponent
    },
    {
      path: 'abcd', component: TodoCreateComponent
    }
  ])
  ]
})
export class TodoModule { }
