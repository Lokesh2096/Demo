import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { SeoService } from 'src/app/seo.service';
import { SharedService } from 'src/app/sharedServices/shared.service';
import { CategoryListRequestAction, CategoryListSuccessAction } from 'src/app/store/action/categories.action';
import { getCategory, getCategoryLoaded, getCategoryLoading, RootReducerState } from 'src/app/store/reducer';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
@Input('giveName') name = '';
@Output('getDate') throwDate:EventEmitter<any> = new EventEmitter();
show = true;
id:number;
data:any;
  constructor(private store:Store<RootReducerState>,private seo:SeoService,private router:ActivatedRoute,private shared:SharedService,private http:HttpClient) {
// this.data = this.router.snapshot.data['categoryData'];
 //this.getdata()
    // console.log(this.data);
 const loading$ = this.store.select(getCategoryLoading);
      const loaded$ = this.store.select(getCategoryLoaded);
      combineLatest([loaded$,loading$]).subscribe(data=>{
        if(!data[0] && !data[1]){
          this.store.dispatch(new CategoryListRequestAction());
          this.getdata();
        }else if(data[0] && !data[1]){
            this.store.select(getCategory).subscribe((datas)=>{
              this.data = datas;
            });
        }
      })
  //  this.router.queryParams.subscribe((data)=>{
  //     this.http.post('https://api.savyajewelsbusiness.com/api/subcategory',{"category_id":data['id']}).subscribe(data=>{
  //       this.data = data;
  //       console.log(this.data['category']['seo_title']);
  //        this.seo.updateTitle(this.data['category']['seo_title']);
  //        this.seo.changeMetaDescription(this.data['category']['seo_description'])
  //       this.shared.closeModal();
  //       console.log(data);
  //     })
  //     console.log(data['id']);
  //   })
    // this.router.queryParamMap.subscribe((data)=>{
    //   this.http.post('https://api.savyajewelsbusiness.com/api/subcategory',{"category_id":data.get('id')}).subscribe(data=>{
    //     this.data = data;
    //     this.shared.closeModal();
    //     console.log(data);
    //   })
    //   console.log(data['id']);
    // })
    // this.router.params.subscribe(data=>{
      
    //  this.id = this.shared.getCategoryId(data.name);
    //  this.getdata()
    //  console.log(data.name)
   // })
   }
   getdata(){
    this.shared.openFormComponent()
    this.http.post('https://api.savyajewelsbusiness.com/api/subcategory',{"category_id":1}).subscribe(data=>{
      this.data = data['data'];
      this.store.dispatch(new CategoryListSuccessAction({data:this.data}));
      this.shared.closeModal();
      console.log(...this.data);
    })
   }
  ngOnInit(): void {
  }

  ngOnChanges(){
    
    this.show = !this.show;
  }
  today(){
    this.throwDate.emit(new Date())
  }


}
