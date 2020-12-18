import { Component } from '@angular/core';
import { FormControl } from'@angular/forms';
import{ NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
  /*template:'<h1>This is my first Angular Application</h1>'+
  '<br/>'+
  'Enter name: <input type="text"/>',*/
  //styleUrls:['/src/assets/css/mystyle.css'],
  //styles:['h1{color:blue;}']

})
export class AppComponent {
  title = 'LTIAngulardemos';
  noofemployees:number=20000;
  a:number=2;
  b:number=3;
  c1:number=this.a+this.b;
}
