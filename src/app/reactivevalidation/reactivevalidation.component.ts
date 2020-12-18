import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactivevalidation',
  templateUrl: './reactivevalidation.component.html',
  styleUrls: ['./reactivevalidation.component.css']
})
export class ReactivevalidationComponent implements OnInit {
  private languages=[{code:"EN",name:"English"},
  {code:"HI",name:"Hindi"},
  {code:"AR",name:"Arabic"},
  {code:"FR",name:"French"}];
  cities: any = ['Mumbai', 'Warangal', 'Nagpur']
  
  private firstnameCtrl:FormControl=new FormControl("",Validators.compose([Validators.required,Validators.minLength(3)]));
  private lastnameCtrl:FormControl=new FormControl("xyz",Validators.compose([Validators.required]));
  private gender:FormControl=new FormControl("",[Validators.required]);
  registerform: FormGroup;
  constructor(private fb:FormBuilder) { 
    // this.registerform=this.fb.group({
    //   firstName:this.firstnameCtrl,
    //   lastName:this.lastnameCtrl,
    // })
  }

  public ngOnInit() {
    this.registerform=this.fb.group({
      firstName:this.firstnameCtrl,
      lastName:this.lastnameCtrl,
      gender:this.gender,
    })
  }
  public register(){
    console.log(this.registerform)
  }

}
