import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveTrailComponent } from './reactive-trail/reactive-trail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LinkPipe } from '../pipes/link.pipe';



@NgModule({
  declarations: [ReactiveTrailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers:[LinkPipe]
})
export class FormPracticeModule { }
