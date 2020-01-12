import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';

  resetName() {
    this.name = '';
  }

  checkName() {
    return (this.name.length < 1) ? true : false;
  }

}
