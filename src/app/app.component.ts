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
  date = new Date();
  currentTime = this.date.getDate() + '/' + this.date.getMonth() + '/' + this.date.getFullYear();
  title = 'WMS';
  user: User = new User(); // данные вводимого пользователя
  receivedUser: User; // полученный пользователь
  done = false;
  homeFlag = false;
  shelfFlag = true;
  invoiceFlag = false;
  reportFlag = false;

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

  receiveMessage($event): void {
    if ($event === 'admin') {
      this.homeFlag = !this.homeFlag;
    }
  }

  exit(): void {
    this.homeFlag = !this.homeFlag;
  }

  shelfActive(): void {
    this.invoiceFlag = false;
    this.reportFlag = false;
    this.shelfFlag = true;
  }

  invoiceActive(): void {
    this.shelfFlag = false;
    this.reportFlag = false;
    this.invoiceFlag = true;
  }

  reportActive(): void {
    this.shelfFlag = false;
    this.invoiceFlag = false;
    this.reportFlag = true;
  }

  openAdminPanel(): void {

  }
}
