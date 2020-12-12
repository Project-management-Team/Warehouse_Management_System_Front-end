import {Component, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpService} from '../http.service';
import { EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ReceivedUser} from '../data-templates/received-data/ReceivedUser';
import {User} from '../data-templates/User';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  @Output() messageEvent = new EventEmitter<string>();
  // tslint:disable-next-line:variable-name
  constructor(private httpService: HttpService, private _snackBar: MatSnackBar) { }
  user: User = {
    login: '',
    password: ''
  };

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    else if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // tslint:disable-next-line:typedef
  // submit(user: User) {
  //   this.httpService.postData(user)
  //     .subscribe(
  //       (data: User) => {},
  //       error => console.log(error)
  //     );
  // }

  sendData(email: FormControl, password: FormControl): void {
    this.user.login = '' + email.value;
    this.user.password = '' + password.value;
    this.httpService.userAuthorizationPost(this.user).subscribe(
      (data: ReceivedUser) => {
        // console.log(data);
        if (data !== null || undefined || '') {
          this.openSnackBar('Welcome!', 'OK');
          sessionStorage.setItem('user', data.login);
          this.messageEvent.emit('check');
        }
        else {
            this.openSnackBar('Wrong Login or Password!', 'Cancel');
        }
      }
    );
    // if (email.value === 'admin@admin.com' && password.value === 'admin') {
    //   this.openSnackBar('Welcome!', 'OK');
    //   this.messageEvent.emit('admin');
    // }
    // else {
    //   this.openSnackBar('Wrong Login or Password!', 'Cancel');
    // }
  }

  flushData(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}

