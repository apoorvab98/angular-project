import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import {Customv} from '../customvalidators/customv';
import {Customval} from '../customvalidators2/customval';
@Component({
  selector: 'app-customvalidator',
  templateUrl: './customvalidator.component.html',
  styleUrls: ['./customvalidator.component.css']
})
export class CustomvalidatorComponent implements OnInit {
  
  
  registerform:FormGroup;
  constructor(private fb:FormBuilder) { 
    // this.registerform=this.fb.group({
    //   firstName:this.firstnameCtrl,
    //   lastName:this.lastnameCtrl,
    // })
  }

  public ngOnInit() {
    this.registerform=this.fb.group({
      firstName:["",Validators.compose([Validators.required,Validators.minLength(3),
      Customv.noSpecialChars])],
      pwd:["",[Customval.strongPwd]]
    })
  }
  public register(){
    console.log(this.registerform.controls.firstName.value)
    console.log(this.registerform.controls.pwd.value)
  }

}
