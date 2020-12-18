import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  public employees=[
    {"id":1,"name":"Andrew","age":23},
    {"id":2,"name":"Sourabh","age":25},
    {"id":3,"name":"Apoorva","age":22},
    {"id":4,"name":"Nayan","age":22}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
