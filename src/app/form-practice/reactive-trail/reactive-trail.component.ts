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
      email:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      phone:new FormControl(),
      address: new FormGroup({
        line1:new FormControl(),
        line2:new FormControl(),
        landmark:new FormControl(),
      }),
      isAgreed:new FormControl(false,Validators.requiredTrue),
    });
    //  pattern , custom validations ,validation from ts file


    // this.information.patchValue({
    //   email:'LokeshKumar2096@gmail.com',
    //   phone:'9782200014'
    // });
    // this.information.setValue({
    //   email:'LokeshKumar2096@gmail.com',
    //   phone:'9782200014',
    //   address:{
    //     line1:'12345',
    //     line2:'67890',
    //     landmark:'AVCSDSS',
    //   }
    // })
    this.information.valueChanges.subscribe((data)=>{
      console.log(this.information.get("isAgreed").errors.required)
    })
    // console.log('LOKESH'.toLowerCase().replace('lokes','-'));
    
    this.information.get('address').valueChanges.subscribe((data)=>{console.log(data)})
   }

   markTouch(form:FormGroup){
     Object.keys(form.controls).forEach(element => {
      // console.log()
       const abstractClass = form.get(element);
       if(abstractClass instanceof FormGroup){
          this.markTouch(abstractClass);
       }else if(abstractClass instanceof FormControl){
          abstractClass.markAsTouched();
       }

     });
   }


   showValue(form){
    if(form.valid){
      console.log('Api Hit');
    }else{
      this.markTouch(form);
    }
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
