import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AppComponent} from '../app.component';
import {HttpService} from '../http.service';
import {ReceivedUser} from '../data-templates/received-data/ReceivedUser';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NewUser} from '../data-templates/NewUser';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-admin-pop',
  templateUrl: './admin-pop.component.html',
  styleUrls: ['./admin-pop.component.css']
})
export class AdminPopComponent implements OnInit {

  userList: ReceivedUser[] = [
    {
      id: 0,
      name: '',
      login: '',
      password: '',
      isAdmin: 0
    }
    ];
  userLogin = sessionStorage.getItem('user');
  loginForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  passwordForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  newUser: NewUser = {
    Login: '',
    Password: '',
    Name: '',
    IsAdmin: 0
  };
  constructor(public dialogRef: MatDialogRef<AppComponent>,
              // tslint:disable-next-line:variable-name
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private httpService: HttpService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.httpService.usersGet().subscribe((data: ReceivedUser[]) => {
      this.userList = data;
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addUser(login: HTMLInputElement, password: HTMLInputElement): void {
    this.newUser.Login = login.value;
    this.newUser.Password = password.value;
    this.newUser.Name = login.value;
    this.newUser.IsAdmin = 0;
    this.httpService.userCreationPost(this.newUser).subscribe();
  }
}
