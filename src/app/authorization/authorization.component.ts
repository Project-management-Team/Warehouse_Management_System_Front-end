import {Component, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../user';
import {HttpService} from '../http.service';
import { EventEmitter } from '@angular/core';

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
  constructor(private httpService: HttpService) { }

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
      this.messageEvent.emit('admin');
    }
  }

  flushData(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }
}

