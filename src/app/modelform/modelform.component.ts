import { Component, OnInit } from '@angular/core';
import {User} from '../Model/user'
import { FormControl,FormGroup,ReactiveFormsModule,FormsModule } from'@angular/forms';
import{ NgModule} from '@angular/core';
@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {
  topics=['angular','HTML5','css'];
  userModel=new User('abc','abc@gmail.com',5555,'','moorning',true);
  public hasError=false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("Data Submitted")
    console.log(this.userModel);
  }

  validateTopic(value:any){
    if(value==='default'){
      this.hasError=true
    }
    else{
      this.hasError=false
    }
  }

}
