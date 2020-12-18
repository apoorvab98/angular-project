import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { FormBuilder,FormControl,FormGroup,ReactiveFormsModule} from'@angular/forms';
import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { ModelformComponent } from './modelform/modelform.component';
import { ReactivevalidationComponent } from './reactivevalidation/reactivevalidation.component';
 import { CustomvalidatorComponent } from './customvalidator/customvalidator.component';
import { EmployeeServiceService } from './employee-service.service';
import { MyserviceService } from './myservice.service';
import { EmployeelistComponent } from './employeelist/employeelist.component';
//import { EmployeelisttComponent } from './employeedetail/employeelist.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeelisttComponent } from './employeelistt/employeelistt.component';
// import { RtFormComponent } from './rt-form/rt-form.component';
// import { RfFormComponent } from './rf-form/rf-form.component';
// import { EmpFormComponent } from './emp-form/emp-form.component';
// import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
// import { EmployeelistComponent } from './employeelist/employeelist.component';
//import (MyserviceService) from './myservice.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NewcomponentComponent,
    ModelformComponent,
    ReactivevalidationComponent,
    CustomvalidatorComponent,
    // DepartmentlistComponent,
    // EmployeelistComponent,
     routingcomponents,
     EmployeelisttComponent,
     EmployeedetailComponent,
    //  RtFormComponent,
    //  RfFormComponent,
    //  EmpFormComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [EmployeeServiceService,
  MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
