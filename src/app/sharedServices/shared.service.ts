import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _service: NotificationsService) { }

  onFail(title,message){
    this._service.warn(title, message, {
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: false
    });
  }
  onSuccess(title, message){
    this._service.success(title, message, {
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: false
    });
  }

}
