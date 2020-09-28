import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  //assignments = ['6-Sep-2020', '12-Sep-2020'];

  isAssignment1 = false;
  showAssignment1() {
    this.isAssignment1 = !this.isAssignment1;
  }
  isAssignment2 = false;
  showAssignment2() {
    this.isAssignment2 = !this.isAssignment2;
  }
  isAssignment3 = false;
  showAssignment3() {
    this.isAssignment3 = !this.isAssignment3;
  }
}
