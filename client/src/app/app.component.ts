import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Market List';

  current_user = {};

  constructor(private _userService: UserService) { }

  propagateUser(user) {
    console.log('in the app component...');
    this.current_user = user;
  }
}
