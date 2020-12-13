import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WarehouseComponent} from '../warehouse.component';
import {DialogData} from '../../../admin-pop/admin-pop.component';
import {FormBuilder} from '@angular/forms';
import {HttpService} from '../../../http.service';
import {ReceivedListItem} from '../../../data-templates/received-data/ReceivedListItem';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  whName = '';
  zoneName = '';
  shelfName = '';
  itemName = '';
  whAddress = '';
  whID = '';
  zoneID = '';
  shelfID = '';

  constructor(public dialogRef: MatDialogRef<WarehouseComponent>,
              // tslint:disable-next-line:variable-name max-line-length
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private _formBuilder: FormBuilder, private httpService: HttpService, private _snackBar: MatSnackBar) { }

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

  setWHID(value): void {
    this.whID = String(this.myWH[this.myWH.findIndex(val => val.name === value)].id);
  }

  setZoneID(value): void {
    this.zoneID = String(this.myZone[this.myZone.findIndex(val => val.name === value)].id);
  }

  setShelfID(value): void {
    this.shelfID = String(this.myShelf[this.myShelf.findIndex(val => val.name === value)].id);
  }

  addWH(): void {
    this.httpService.addWareHousePost(this.whName, this.whAddress).subscribe(
      res => {
        this.openSnackBar('Adding is success!', 'Ok');
      }, error => this.openSnackBar(`Something went wrong!\nStatus: ${error}`, 'Cancel'));
  }

  addZone(): void {
    console.log(this.whID);
    console.log('BBBBB');
    this.httpService.addZonePost(this.zoneName, this.whID).subscribe(
      res => {
        this.openSnackBar('Adding is success!', 'Ok');
      }, error => this.openSnackBar(`Something went wrong!\nStatus: ${error}`, 'Cancel'));
  }

  addShelf(): void {
    this.httpService.addShelfsPost(this.shelfName, this.zoneID).subscribe(
      res => {
        this.openSnackBar('Adding is success!', 'Ok');
      }, error => this.openSnackBar(`Something went wrong!\nStatus: ${error}`, 'Cancel'));
  }

  addItem(): void {
    this.httpService.addElementsPost(this.itemName, this.shelfID).subscribe(
      res => {
        this.openSnackBar('Adding is success!', 'Ok');
      }, error => this.openSnackBar(`Something went wrong!\nStatus: ${error}`, 'Cancel'));
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
