import {Component, Inject, Input, OnInit} from '@angular/core';
import {ReceivedUser} from '../../../data-templates/received-data/ReceivedUser';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NewUser} from '../../../data-templates/NewUser';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AppComponent} from '../../../app.component';
import {HttpService} from '../../../http.service';
import {ReceivedItems} from '../../../data-templates/received-data/ReceivedItems';

export interface MyDialogData {
  id: number;
}
@Component({
  selector: 'app-add-btn-pop',
  templateUrl: './add-btn-pop.component.html',
  styleUrls: ['./add-btn-pop.component.css']
})
export class AddBtnPopComponent implements OnInit {

  userList = [
    {
      id: 0,
      name: '',
      login: '',
      password: '',
    }
  ];
  userLogin = sessionStorage.getItem('user');
  serialNumForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  descriptionForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  newItem = {
    serialNumber: '',
    description: '',
  };
  @Input() myCellID: number;
  constructor(public dialogRef: MatDialogRef<AppComponent>,
              // tslint:disable-next-line:variable-name
              @Inject(MAT_DIALOG_DATA) public data: MyDialogData, private httpService: HttpService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.httpService.usersGet().subscribe((data: ReceivedUser[]) => {
      this.userList = data;
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addItem(serialNum: HTMLInputElement, description: HTMLInputElement): void {
    this.newItem.serialNumber = serialNum.value;
    this.newItem.description = description.value;
    this.httpService.itemCreationPost(this.newItem.serialNumber, this.newItem.description).subscribe(
      (res: number) => {
        this.httpService.putItemPost(this.data.id, res).subscribe(
          responce => console.log(responce), error => console.log(error)
        );
      }, error => console.log(error)
    );
  }

}
