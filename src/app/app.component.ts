import {Component} from '@angular/core';
import {HttpService} from './http.service';
import {User} from './user';
import {MatDialog} from '@angular/material/dialog';
import {AdminPopComponent} from './admin-pop/admin-pop.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  date = new Date();
  currentTime = this.date.getDate() + '/' + (this.date.getMonth() + 1) + '/' + this.date.getFullYear();
  title = 'WMS';
  user: User = new User(); // данные вводимого пользователя
  receivedUser: User; // полученный пользователь
  done = false;
  homeFlag = false;
  shelfFlag = true;
  invoiceFlag = false;
  reportFlag = false;
  animal: string;
  name: string;

  constructor(private httpService: HttpService, public dialog: MatDialog) {
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
    location.reload();
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
    const dialogRef = this.dialog.open(AdminPopComponent, {
      width: '50vw',
      height: '50vh',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
