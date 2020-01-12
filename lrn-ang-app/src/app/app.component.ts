import { Component } from '@angular/core';
import { Directive } from '@angular/core'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  flag = true;

  resetName() {
    this.name = '';
  }

  toggleFlag() {
    this.flag = !this.flag;
  }

  checkName() {
    return (this.name.length < 1) ? true : false;
  }

  getColor() {
    return (this.flag) ? 'green' : 'red';
  }

  getClassColor() {
    return this.flag;
  }

}
