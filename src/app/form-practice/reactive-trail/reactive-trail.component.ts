import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-trail',
  templateUrl: './reactive-trail.component.html',
  styleUrls: ['./reactive-trail.component.css']
})
export class ReactiveTrailComponent implements OnInit {
  information:FormGroup;
  informationFB:any;
  constructor(private fb:FormBuilder) {
    this.information = new FormGroup({
      type:new FormControl('email',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email,Validators.minLength(5),Validators.maxLength(10)]),
      phone:new FormControl(''),
      address: new FormGroup({
        line1:new FormControl('',Validators.required),
        line2:new FormControl('',Validators.required),
        landmark:new FormControl('',Validators.required),
      }),
      isAgreed:new FormControl(false,Validators.requiredTrue),
    });
    //  pattern , custom validations ,validation from ts file

    // this.information.get('email').setValidators()
    
    // this.information.setValue({
    //   email:'LokeshKumar2096@gmail.com',
    //   phone:'9782200014',
    //   address:{
    //     line1:'12345',
    //     line2:'67890',
    //     landmark:'AVCSDSS',
    //   }
    // })
    this.information.get('type').valueChanges.subscribe((data)=>{
      if(data == 'phone')
      console.log(data);
    })
    // console.log('LOKESH'.toLowerCase().replace('lokes','-'));
    
    this.information.get('address').valueChanges.subscribe((data)=>{console.log(data)})
   }
validationErrors = {
  'email':{
    'email':'Enter a Valid Email',
    'required':'Email is Required',
    'minlength':'Mininum length is required',
    'maxlength':'Maximum Length is required',
  },
  'phone':{
    'required':'Phone number is required',
    'minlength':'Mininum length is required',
    'maxlength':'Maximum Length is required',
},
  'line1':{'required':'Line 1 is required'},
  'line2':{'required':'Line 2 is required'},
  'landmark':{'required':'LandMark is required'},
  'isAgreed':{'required':'Agreement is required'}
}
Errors = {
  'email':'',
  'phone':'',
  'line1':'',
  'line2':'',
  'landmark':'',
  'isAgreed':'',
}

  loadData(){
    this.information.patchValue({
      email:'LokeshKumar2096@gmail.com',
      phone:'9782200014'
    });
  }

  setValidationsOnPhone(){

    this.information.get('phone').setValidators([Validators.minLength(5),Validators.maxLength(10)]);
    this.information.get('phone').updateValueAndValidity();
   // console.log(this.information.get('phone').errors)
  }
  removeValidationsOnPhone(){
    this.information.get('phone').clearValidators();
    this.information.get('phone').updateValueAndValidity();
    this.showValidationError(this.information);
   // console.log(this.information.get('phone').errors)
  }

   markTouch(form:FormGroup){
     Object.keys(form.controls).forEach(element => {
       const abstractClass = form.get(element);
       if(abstractClass instanceof FormGroup){
          this.markTouch(abstractClass);
       }else if(abstractClass instanceof FormControl){
          abstractClass.markAsTouched();
       }
     });
   }

   showValidationError(form:FormGroup){//email
    Object.keys(form.controls).forEach(element => {
      const abstractClass = form.get(element);
      if(abstractClass instanceof FormGroup){
         this.showValidationError(abstractClass);
      }else if(abstractClass instanceof FormControl){
        this.Errors[element] = '';
        if(!abstractClass.valid && (abstractClass.dirty || abstractClass.touched)){
          Object.keys(abstractClass.errors).forEach(error=>{
            console.log(abstractClass.errors);
            this.Errors[element] += this.validationErrors[element][error]+'<br>';
          })
          
        }
      }
    });
  }
  resetMyForm(){
    this.information.reset();
  }

   showValue(form){
    if(form.valid){
     // console.log('Api Hit');
      localStorage.setItem("information",JSON.stringify(form.value))
      sessionStorage.setItem("information",JSON.stringify(form.value))

    }else{
      this.markTouch(form);
      this.showValidationError(form)
    }
   }
   getValue(){
     console.log(JSON.parse(localStorage.getItem("information")));
     console.log(JSON.parse(sessionStorage.getItem("information")));
   }

  ngOnInit(): void {
    // this.informationFB = this.fb.group({
    //   email:[''],
    //   phone:[''],
    //   address: this.fb.group({
    //     line1:[''],
    //     line2:[''],
    //     landmark:[''],
    //   })
    // })
  }

}
