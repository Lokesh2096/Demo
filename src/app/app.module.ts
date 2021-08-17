import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { rootReducer } from './store/reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './heroes/heroes.component';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyaccountModule } from './myaccount/myaccount.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoModule } from './todo/todo.module';
import { SharedService } from './sharedServices/shared.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LinkPipe, safePipe } from './pipes/link.pipe'; 
import { FormPracticeModule } from './form-practice/form-practice.module';
import { LineonePipe } from './pipes/lineone.pipe';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';
import { NewPipesPipe } from './pipes/new-pipes.pipe';
import { OnclickDirective } from './directives/onclick.directive';
import { SeoService } from './seo.service';
import { SharedModule } from './shared/shared.module';
import { NewBasicComponent } from './new-basic/new-basic.component';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NotFoundComponent,
    LineonePipe,
    HeaderComponent,
    DummyComponentComponent,
    NewBasicComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FormPracticeModule,
  //  MyaccountModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot({
      position:["middle","center"],
       timeOut: 3000,
       showProgressBar: true,
       pauseOnHover: true,
       clickToClose: true
     }),
    StoreModule.forRoot(rootReducer),
    
  ],
  providers: [DatePipe,SharedService,SeoService],
  exports:[],
  entryComponents:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
