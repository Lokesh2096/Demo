import { EventEmitter, Injectable, Output } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { BASE, UserListurl } from '../config';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  @Output() isLoggedin:EventEmitter<any> = new EventEmitter();
  url = 'https://jsonplaceholder.typicode.com/users';
  header:any;
  constructor(private _service: NotificationsService,private http:HttpClient) { }
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

  getOrderRequest():Observable<any>{
     return this.http.get(this.url);
  }





  Delete(api:any){
    this.header = new HttpHeaders().set(
      "Authorization",
       'Bearer'+" "+this.getToken()
    );
    return new Promise((resolve, reject) => {
      this.http.delete(BASE+api,  {headers:this.header})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
 
  Post(api:any, formData:any) {
    return new Promise((resolve, reject) => {
      this.http.post(api, formData,  {headers:this.header})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
 
  Put(api:any, formData:any,parameters={}) {
    return new Promise((resolve, reject) => {

      let options = { headers: this.header ,params:parameters};

      this.http.put(api+'/'+formData,formData,options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }



  Get(url):Promise<any>{
    return new Promise((resolve, reject) => { 
      this.http.get(BASE+url).subscribe((res)=>{
      resolve(res);
    },
    (err)=>{
      resolve(err);
    }
    );
    });
 }
 
 giveUserList(){
   const user = this.Get(UserListurl).then(
     data=>{
       return data
     }
   ).catch(
    data=>{
      return data
    }
  );
  return user;
 }
 giveDiam(){
  const diam = this.Post('https://divinediamonds.myclientdemo.xyz/api/product/filter-product',{"param1":[{"param_name":"Shape","param_value":"TR"},{"param_name":"Color","param_value":"ALL"},{"param_name":"Purity","param_value":"ALL"},{"param_name":"Lab","param_value":"GIA"},{"param_name":"CaratFrom","param_value":"1.00"},{"param_name":"CaratTo","param_value":"99.99"},{"param_name":"PG","param_value":"1"}],"param2":[{"param_name":"search_type","param_value":"White"},{"param_name":"price_total_from","param_value":"5"},{"param_name":"price_total_to","param_value":"20000000"},{"param_name":"page_number","param_value":"1"},{"param_name":"page_size","param_value":"20"}],"page":"1"}).then(data=>{return data})
  return diam;
 }
  login(){
    this.isLoggedin.emit(1);
 
    localStorage.setItem('token','eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg1NjEyY2QzZTYwNDZkZWI1YWFmYTIwYWJmYzhjYzk5OWYwYjY0Y2M1Y2QxYTBjOGVkZGMwYWU5MjQ1ZTJlNDlmMmM0ZmY3MDNjZWY1YTciLCJpYXQiOjE2MjY0NDI1NzEsIm5iZiI6MTYyNjQ0MjU3MSwiZXhwIjoxNjU3OTc4NTcxLCJzdWIiOiI0NyIsInNjb3BlcyI6W119.LUdRt1I_A2suVtQ6X0L8nSI9OQrHvdNguR33uuwSgVdWSi2vLiuWiNttW-2ZygS5bz5CLE2vVfSxiOs7giSQSM4Gbz5jqaLMME8MjQlqiTc7uEMvYvf5AKN74zSpB0HZU_y17QLfpEL_LmoblFsJtFWM8URsaDKIRNQOr-W5YydHLjG8bOY4EyWRZ6JJnOn8wO43cQ2MF6Ji88fI_UEY9bhzhE1NexWFPrN8KP19EUaBAmirpyyrJcpb6n6j36aHjIiuDC7AQQzoepbPxDiifYoBWk8G4cZ9KHEqxln6XMgUx9u_7ylsf0eHNKX53wKLt0NMiCqCymoqNH9iYmB7oGGi_AJcIA5uxyANVZlYCKaaFbRnF5bkuA5ECyDFgIlgS_tVrPxup9fRYTOkbYCYiira0S1bcQJifQ_sYIJ1vnhQ4ISGMWVZDacV3leb5kRtYWexFpO3WRkruugBJ7rwrvykW3Eh1e2ksw38VuAkH_cbiDncWA5YnDz81UUIWKpXBvfHH2m4bLY5_01xfFb7JkTjCXpHgEoJAOFIIvYWsOMW15khzFMqBFHu-yfZq4nWlhDyowhZbt2HoQR5gtVNkfUEC3ykM4xOBQL8jabLOtW__GVAGFG2a8dDLMLG1hT8y92yM13mBrpkwgblcpH4EnsNhB1fDSKa5p2-i6uzu4g');
    this.onSuccess('login','I am Logged in');
  }

  getToken(){
    return localStorage.getItem('token')
  }
  logout(){
    this.isLoggedin.emit(0);
    this.onFail('logout','I am Logged out');
    localStorage.removeItem('token');
  }
  checkToken():boolean{
    let token = localStorage.getItem('token');
   
    if(token){
     return true;
    }else{
      return false;
    }
  }



}
