import {Component, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../user';
import {HttpService} from '../http.service';
import { EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  submit(user: User) {
    this.httpService.postData(user)
      .subscribe(
        (data: User) => {},
        error => console.log(error)
      );
  }

  sendData(email: FormControl, password: FormControl): void {
    if (email.value === 'admin@admin.com' && password.value === 'admin') {
      this.openSnackBar('Welcome!', 'OK');
      this.messageEvent.emit('admin');
    }
    else {
      this.openSnackBar('Wrong Login or Password!', 'Cancel');
    }
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

