import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-trail',
  templateUrl: './reactive-trail.component.html',
  styleUrls: ['./reactive-trail.component.css']
})
export class ReactiveTrailComponent implements OnInit {
  information:FormGroup;
  informationFB:FormArray;
  constructor(private fb:FormBuilder) {
    this.information = new FormGroup({
      type:new FormControl('email',[Validators.required]),
      forEmail:new FormGroup({
        email:new FormControl('',[this.checkEmail('asik'),Validators.required,Validators.email,Validators.minLength(5),Validators.maxLength(10)]),
        confirmEmail:new FormControl('',[Validators.required,Validators.email])
      },{validators:this.confirmEmail})
    ,
      phone:new FormControl(''),
      address: new FormArray(
        [
          this.addNewAddress()
        ]
      ),

      isAgreed:new FormControl(false,Validators.requiredTrue),
    });

    // this.informationFB = new FormArray([
    //   new FormControl('email',[Validators.required]),
    //   new FormControl('',[this.checkEmail('asik'),Validators.required,Validators.email,Validators.minLength(5),Validators.maxLength(10)]),
    //   new FormControl(''),
    //   new FormGroup({
    //     line1:new FormControl('',Validators.required),
    //     line2:new FormControl('',Validators.required),
    //     landmark:new FormControl('',Validators.required),
    //   }),
    //   new FormControl(false,Validators.requiredTrue),
    // ]);
    // console.log(this.informationFB.value);
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
    'checkName':'Name is not correct',
  },
  'confirmEmail':{
    'email':'Enter a Valid Email',
    'required':'Email is Required',
    'minlength':'Mininum length is required',
    'maxlength':'Maximum Length is required',
    'checkName':'Name is not correct',
  },
  'phone':{
    'required':'Phone number is required',
    'minlength':'Mininum length is required',
    'maxlength':'Maximum Length is required',
},
  'line1':{'required':'Line 1 is required'},
  'line2':{'required':'Line 2 is required'},
  'landmark':{'required':'LandMark is required'},
  'isAgreed':{'required':'Agreement is required'},
  'forEmail':{'misMatch':'Email Mismatch'}
}
Errors = {
  'confirmEmail':'',
  'forEmail':'',
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


   addNewAddress(){
    return  new FormGroup({line1:new FormControl('',Validators.required),
      line2:new FormControl('',Validators.required),
      landmark:new FormControl('',Validators.required),})
   }
   addAddress(){
     (<FormArray>this.information.get('address')).push(this.addNewAddress());
    
   }

   removeAddress(index){
    (<FormArray>this.information.get('address')).removeAt(index);
  }

   showValidationError(form:FormGroup){//email
    Object.keys(form.controls).forEach(element => {
      const abstractClass = form.get(element);
      this.Errors[element] = '';
        if(!abstractClass.valid && (abstractClass.dirty || abstractClass.touched)){
         if(abstractClass.errors){
            Object.keys(abstractClass.errors).forEach(error=>{
            console.log(abstractClass.errors);
            this.Errors[element] += this.validationErrors[element][error]+'<br>';
          })
        } 
      }
      if(abstractClass instanceof FormGroup){
         this.showValidationError(abstractClass);
      }else if(abstractClass instanceof FormArray){
        abstractClass.controls.forEach(data=>{
        if(data  instanceof FormGroup)
          this.showValidationError(data);
        });
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
   dummyFunction(){
     const dummy =  this.information.get('address');
     console.log(dummy.get('0').get('line1').value);
   }
   confirmEmail(control: AbstractControl): {[key:string]:any} | null{
     
    const emailValues = (<FormGroup>control).controls;
    console.log(emailValues['email']['pristine']);
     if(emailValues['email']['value'] !== emailValues['confirmEmail']['value']
      && (!emailValues['confirmEmail']['pristine'])){
       console.log({'misMatch':'Email does not match'})
       return {'misMatch':'Email does not match'};
     }
     return null;
   }
   checkEmail(name){
   return function (control: AbstractControl): {[key:string]:any} | null{
    const email:string = control.value;
    if(email.includes(name)){
      return null;
    }else{
      return {'checkName':true}
    }
    console.log(email);
    
   }}

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
