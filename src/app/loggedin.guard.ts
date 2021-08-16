import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './sharedServices/shared.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {
  constructor(private shared:SharedService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.shared.getToken());
    if(this.shared.getToken()){
      this.shared.onSuccess('congrats','you can go further')
      return true;
    }else{
      this.shared.onFail('congrats','you can\'t go further')
      return false;
    }
  }
  
}
