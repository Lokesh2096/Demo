import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveTrailComponent } from './reactive-trail/reactive-trail.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ReactiveTrailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormPracticeModule { }
