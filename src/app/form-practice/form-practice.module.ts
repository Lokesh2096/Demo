import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveTrailComponent } from './reactive-trail/reactive-trail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ReactiveTrailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
  ],
 // providers:[LinkPipe]
})
export class FormPracticeModule { }
