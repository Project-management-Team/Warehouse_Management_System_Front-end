import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AppComponent} from '../../../app.component';
import {HttpService} from '../../../http.service';
import {ReceivedUser} from '../../../data-templates/received-data/ReceivedUser';
import {MyDialogData} from '../add-btn-pop/add-btn-pop.component';

interface ReceivedData {
    id: number;
    name: string;
}

@Component({
  selector: 'app-move-btn-pop',
  templateUrl: './move-btn-pop.component.html',
  styleUrls: ['./move-btn-pop.component.css']
})
export class MoveBtnPopComponent implements OnInit {

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
  receivedData: ReceivedData[];
  constructor(public dialogRef: MatDialogRef<AppComponent>,
              // tslint:disable-next-line:variable-name
              @Inject(MAT_DIALOG_DATA) public data: MyDialogData, private httpService: HttpService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.httpService.moveBtnGet(sessionStorage.getItem('whID')).subscribe(
      (res: ReceivedData[]) => {
        this.receivedData = res;
      }, error => console.log(error)
    );
    // this.httpService.usersGet().subscribe((data: ReceivedUser[]) => {
    //   this.userList = data;
    // });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // addItem(serialNum: HTMLInputElement, description: HTMLInputElement): void {
    // this.newItem.serialNumber = serialNum.value;
    // this.newItem.description = description.value;
    // this.httpService.itemCreationPost(this.newItem.serialNumber, this.newItem.description).subscribe(
    //   (res: number) => {
    //     this.httpService.putItemPost(this.data.id, res).subscribe(
    //       responce => console.log(responce), error => console.log(error)
    //     );
    //   }, error => console.log(error)
    // );
  // }

  sendMove(msg): void {
    // console.log(msg);
    // alert(msg);
    this.httpService.moveBtnPost(msg, this.data.id).subscribe();
  }
}
