import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard implements CanDeactivate<NotFoundComponent> {
  canDeactivate(
    component: NotFoundComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(confirm('are you sure you want to leave this page')){
      return true;
    }else{
      return false;
    }
  }
  
}
