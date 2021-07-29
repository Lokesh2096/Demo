import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipes'
})
export class NewPipesPipe implements PipeTransform {

  transform(value,value2): unknown {
   // console.log(value.replace(value2,''))
    return value.replace(value2,'').replace(/ /g,'-');
  }

}
