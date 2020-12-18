import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

//const routes: Routes = [];/*cmmented*/
/*added*/
const routes: Routes = [
  //{path:'',component:DepartmentlistComponent},//default route
  //{path:'',redirectTo:'/departments',pathMatch:'full'},//default route
  {path:'',redirectTo:'',pathMatch:'full'},//default route
  {path:'departments',component:DepartmentlistComponent},
  {path:'employees',component:EmployeelistComponent},
  //{path:"**",component:PagenotfoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
/*aadded*/
export const routingcomponents=[EmployeelistComponent,DepartmentlistComponent]
