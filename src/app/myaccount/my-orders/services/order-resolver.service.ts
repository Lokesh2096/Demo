import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { SharedService } from 'src/app/sharedServices/shared.service';

@Injectable({
  providedIn: 'root'
})
export class OrderResolverService {

  constructor(private shared:SharedService) {
   }
   resolve(): Observable<any> | Promise<any> | any{
     // return this.shared.giveDiam();
      return this.shared.giveUserList();
  }
}
