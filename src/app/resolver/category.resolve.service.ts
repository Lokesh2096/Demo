import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../sharedServices/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolveService  implements Resolve <any>{

  constructor(private http:HttpClient,private shared:SharedService) { }
 resolve(route: ActivatedRouteSnapshot): any{
    console.log(route)

    return this.shared.sendCategoryData(route.params['id']);
  }
}
