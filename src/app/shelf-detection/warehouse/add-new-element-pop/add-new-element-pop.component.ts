import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WarehouseComponent} from '../warehouse.component';
import {DialogData} from '../../../admin-pop/admin-pop.component';
import {FormBuilder} from '@angular/forms';
import {HttpService} from '../../../http.service';
import {ReceivedListItem} from '../../../data-templates/received-data/ReceivedListItem';

@Component({
  selector: 'app-add-new-element-pop',
  templateUrl: './add-new-element-pop.component.html',
  styleUrls: ['./add-new-element-pop.component.css']
})
export class AddNewElementPopComponent implements OnInit {

  myWH: ReceivedListItem[] = [{
    id: 0,
    name: ''
  }];
  myZone: ReceivedListItem[] = [{
    id: 0,
    name: ''
  }];
  myShelf: ReceivedListItem[] = [{
    id: 0,
    name: ''
  }];
  constructor(public dialogRef: MatDialogRef<WarehouseComponent>,
              // tslint:disable-next-line:variable-name
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private _formBuilder: FormBuilder, private httpService: HttpService) { }

  ngOnInit(): void {
    this.getWH();
    this.getZone();
    this.getShelf();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getWH(): void {
    this.httpService.warehousesAllGet().subscribe(
      (data: ReceivedListItem[]) => {
        this.myWH = data;
      }
    );
  }

  getZone(): void {
    this.httpService.zonesAllGet().subscribe(
      (data: ReceivedListItem[]) => {
        this.myZone = data;
      }
    );
  }

  getShelf(): void {
    this.httpService.shelfsAllGet().subscribe(
      (data: ReceivedListItem[]) => {
        this.myShelf = data;
      }
    );
  }
}
