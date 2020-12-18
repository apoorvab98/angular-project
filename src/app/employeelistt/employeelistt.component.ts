import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
//import { EmployeeServiceService } from './employee-service.service';
@Component({
  selector: 'app-employeelistt',
  templateUrl: './employeelistt.component.html',
  styleUrls: ['./employeelistt.component.css']
})
export class EmployeelisttComponent implements OnInit {
  //public employees: any=[]
  public employees=[] as any;
  // constructor(private _employeeService:EmployeeServiceService) {
  //  this.employees=_employeeService.getEmployees(); 
  // }
  //http
  
  constructor(private _employeeService:EmployeeServiceService) {
  this.employees=this._employeeService.getEmployees()
  .subscribe(data => this.employees = data);
}

  ngOnInit(): void {
  }

}
