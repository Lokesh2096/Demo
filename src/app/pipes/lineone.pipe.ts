import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineone'
})
export class LineonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]) {
    return null;
  }

}


