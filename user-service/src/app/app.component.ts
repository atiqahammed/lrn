import { Component } from '@angular/core';
import { UserService } from './user.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-service';
  user = null;

  constructor(user : UserService) {
    this.user = user;
    console.log(user.uid)
  }

}
