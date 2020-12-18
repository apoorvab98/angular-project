import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { MyserviceService } from '../myservice.service';
//import { EmployeeServiceService } from './employee-service.service';
@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  // public employees=[
  //   {"id":1,"name":"Andrew","age":23},
  //   {"id":2,"name":"Sourabh","age":25},
  //   {"id":3,"name":"Apoorva","age":22},
  //   {"id":4,"name":"Nayan","age":22}
  // ];

 
  public employees:any=[]
  // public employees=[] as any;
  // constructor(private _employeeService:EmployeeServiceService) {
  //  this.employees=_employeeService.getEmployees(); 
  // }
  // constructor() { }

  constructor(private _employeeService:EmployeeServiceService) {
    this.employees=this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);
  }

  ngOnInit(): void {
  }

}
