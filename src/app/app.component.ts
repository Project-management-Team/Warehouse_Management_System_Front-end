import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {MatDialog} from '@angular/material/dialog';
import {AdminPopComponent} from './admin-pop/admin-pop.component';
import {NewUser} from './data-templates/NewUser';
import {ReceivedUser} from './data-templates/received-data/ReceivedUser';
import {User} from './data-templates/User';

// tslint:disable-next-line:class-name
interface receivedUser {
  Id: number;
  Name: string;
  Login: string;
  Password: string;
  IsAdmin: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  date = new Date();
  currentTime = this.date.getDate() + '/' + (this.date.getMonth() + 1) + '/' + this.date.getFullYear();
  title = 'WMS';
  user: User; // данные вводимого пользователя
  receivedUser: receivedUser; // полученный пользователь
  // change for authorization
  done = true;
  homeFlag = false;
  //
  shelfFlag = true;
  invoiceFlag = false;
  reportFlag = false;
  animal: string;
  name: string;
  myUser: User = {
    login: 'bbrother',
    password: 'qwer1234'
  };

  admin: NewUser = {
    Login: 'admin@admin.com',
    Password: 'admin',
    Name: 'admin',
    IsAdmin: 1
  };

  constructor(private httpService: HttpService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  submit(user: User) {
    // this.httpService.postData(user)
    //   .subscribe(
    //     (data: User) => {
    //       // this.receivedUser = data;
    //       this.done = true;
    //     },
    //     error => console.log(error)
    //   );
  }

  receiveMessage($event): void {
    if ($event === 'check') {
      this.done = false;
      this.homeFlag = true;
      console.log(sessionStorage.getItem('user'));
    }
  }

  exit(): void {
    this.homeFlag = false;
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

  req1(): void {
    // this.httpService.postData(this.myUser)
    //   .subscribe(
    //     (data: receivedUser) => {
    //       this.receivedUser = data;
    //       console.log(this.receivedUser);
    //     },
    //     error => console.log(error)
    //   );
    this.httpService.userCreationPost(this.admin).subscribe(
      (data) => {
        console.log('Done');
      }, error => console.log(error)
    );
  }

  req2(): void {
    this.httpService.usersGet().subscribe(
      (data: ReceivedUser[]) => {
        console.log(data);
      }, error => console.log(error)
    );
  }

  req3(): void {

  }

  req4(): void {

  }

  req5(): void {

  }
}
