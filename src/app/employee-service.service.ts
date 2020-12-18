import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  //sevives
//   getEmployees(){
//   return [
//     {"id":1,"name":"Andrew","age":23},
//     {"id":2,"name":"Sourabh","age":25},
//     {"id":3,"name":"Apoorva","age":22},
//     {"id":4,"name":"Nayan","age":22}
//   ];
// }
//   constructor() { }

/*httpclient*/
private _url: string = "/assets/data/employee.json";

constructor(private http:HttpClient) { }

getEmployees(): Observable<IEmployee[]>{
  return this.http.get<IEmployee[]>(this._url);
                  
}
}
