// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-rf-form',
//   templateUrl: './rf-form.component.html',
//   styleUrls: ['./rf-form.component.css']
// })
// export class RfFormComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'rf-form',
  templateUrl: './rf-form.component.html',
  styleUrls: ['./rf-form.component.css']
})
export class RfFormComponent implements OnInit {
  employeeForm:FormGroup;
  employees:Employee[] = new Array();
  
  // fb:FormBuilder;
  // constructor(fb:FormBuilder) { 
  //   this.fb = fb;
  // }

  constructor(private fb:FormBuilder){
  }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      employeeId:['', Validators.required],
      employeeName: ['', Validators.required],
      employeeSalary: ['', Validators.required]
    });
  }
  addEmployee():void{
    let emp:Employee = new Employee(this.employeeForm.controls.employeeId.value, 
                        this.employeeForm.controls.employeeName.value,
                        this.employeeForm.controls.employeeSalary.value);
    this.employees.push(emp);
  }
}

