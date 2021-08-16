import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnclickDirective } from '../directives/onclick.directive';
import { LinkPipe, safePipe } from '../pipes/link.pipe';
import { NewPipesPipe } from '../pipes/new-pipes.pipe';



@NgModule({
  declarations: [OnclickDirective,LinkPipe,safePipe,NewPipesPipe],
  imports: [
    CommonModule
  ],
  exports:[OnclickDirective,LinkPipe,safePipe,NewPipesPipe]
})
export class SharedModule { }
