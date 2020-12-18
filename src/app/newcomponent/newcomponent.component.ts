import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,ReactiveFormsModule,FormsModule } from'@angular/forms';
import{ NgModule} from '@angular/core';

import {item} from "../Model/item";
import {Movie} from "../Model/Movie";
class city{
  cname:string="";
  cval:number=0;
}
@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {
  //directive
items:item[]=[{name:"One",val:1},{name:"Two",val:2},{name:"Three",val:3}];
selectedValue:string="select";
//array movies
title:string="Top 10 movies";
movies:Movie[]=[
  {title:"movie1",director:"Raj hirani"},
  {title:"movie2",director:"boman hirani"},
]

//assignmnet 2
employees=[{empid:1,name:"apoo"},{empid:2,name:"bhasu"},{empid:3,name:"dhruv"}];
selectedValue1:string="select";

/*---------------------REctive forms---------------------*/
// formdata;
//   constructor() { 
//     //just for reactive form 
//     this.formdata=new FormGroup({
//       emailid2:new FormControl("angular@gmail.com"),
//       pwd2:new FormControl("abc"),
//     });
//   }
  //constructor() { }
  ngOnInit(): void {
  }
  btntext:string="Click to add";
  txt:string="2020"
  reg:string="Register as LTI"
  message:string="GET"
  imagepath="/assets/images/logo.png"
  // num1:string=""
  // num2:string=""
  num1:number=0;
  num2:number=0;
  num3:number=0;
  //event binding
  itemcount:number=1;
  goals:string[]=[]
  goal:string="Be a goodhuman always!!"
//directivec
months=["January","February","March","April","May"]


  addItem(){
    alert("Hello")
    this.goals.push(this.goal);
    this.itemcount=this.goals.length;
    alert(this.goals)
    alert(this.itemcount)
  }
  addsum(){
    this.num3=this.num1+this.num2;
    alert(this.num3)
  }
  // addsum2(num1,num2){
  //   this.num3=this.num1+this.num2;
  //   alert(this.num3)
  // }

  //forms
  //data:<any>="";
  /*
  onClickSubmit(data:any){
    alert("Enteed name:"+data.name+" city is: "+data.city);
  }
  */
  PartyRoles = [
    {
     Id: 1,
     Name: "Vendor",
     Checked: true
    },
    {
      Id: 2,
      Name: "Client",
      Checked: true
    },
    {
      Id: 3,
      Name: "Consigner",
      Checked: false
    }       
  ]

 namee:string=""
 cityy:string=""
 cities1=["mumbai","nagpur","kolkata"]
 gender=""
 hobbies={draw:false,paint:false}
  // cities:city[]=[{cname:"mumbai",cval:1},{cname:"nagpur",cval:2},{cname:"kolkata",cval:3}]
  // selectedValue2:string="select";
  // onClickSubmit(data:any){
  //   alert("Enteed name:"+data.name+" city is: "+data.city);
  // }
  onClickSubmit(data:any){
    // alert("Enteed name:"+data.name+" city is: "+data.city);
    //this.cityy=data.cityy;
    this.namee=data.namee;
    this.cityy=data.cityy;
    this.gender=data.gender;
    this.hobbies=data.hobbies;
  }
  editPartyRolesSubmit() {
    console.log(this.PartyRoles);
  }

  //Reactive forms
  // onClickSubmit(data:any){
  //   alert("Enter email id:"+data.emailid2+" password is: "+data.pwd2);
  // }

}
