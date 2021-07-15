import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  transform(value: string,isAll:boolean=true): string {
    if(isAll){
      value = value.replace(/ /g,'-');
    }else{
      value = value.replace(' ','-');
    }
    return value;
  }
}


@Pipe({
  name: 'safe'
})
export class safePipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}
  transform(value: string): any {
    console.log('safe pipe')
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}

