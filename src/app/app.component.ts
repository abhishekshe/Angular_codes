import { Component, Input } from '@angular/core';
import { Emp } from './emp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  val = "abhishek"

  isValid:boolean= true
 
  title = 'angular_revision';
  onChange(val:any){
    this.isValid = val

  }
  
  
}
