import {Component} from '@angular/core';
import {HttpService} from './http.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  title = 'WMS';
  user: User = new User(); // данные вводимого пользователя

  receivedUser: User; // полученный пользователь
  done = false;

  constructor(private httpService: HttpService) {
  }

  // tslint:disable-next-line:typedef
  submit(user: User) {
    this.httpService.postData(user)
      .subscribe(
        (data: User) => {
          this.receivedUser = data;
          this.done = true;
        },
        error => console.log(error)
      );
  }
}
