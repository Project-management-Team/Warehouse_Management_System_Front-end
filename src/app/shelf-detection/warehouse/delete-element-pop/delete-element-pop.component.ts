import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WarehouseComponent} from '../warehouse.component';
import {DialogData} from '../../../admin-pop/admin-pop.component';
import {FormBuilder} from '@angular/forms';
import {ReceivedListItem} from '../../../data-templates/received-data/ReceivedListItem';
import {HttpService} from '../../../http.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-element-pop',
  templateUrl: './delete-element-pop.component.html',
  styleUrls: ['./delete-element-pop.component.css']
})
export class DeleteElementPopComponent implements OnInit {
  // myWH: ReceivedListItem[] = [{
  //   id: 0,
  //   name: ''
  // }];
  myZone: ReceivedListItem[] = [{
    id: 0,
    name: ''
  }];
  myShelf: ReceivedListItem[] = [{
    id: 0,
    name: ''
  }];
  myElement: ReceivedListItem[] = [{
    id: 0,
    name: ''
  }];
  selected: '';
  constructor(public dialogRef: MatDialogRef<WarehouseComponent>,
              // tslint:disable-next-line:variable-name max-line-length
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private _formBuilder: FormBuilder, private httpService: HttpService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.getWH();
    this.getZone();
    this.getShelf();
    this.getElement();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // getWH(): void {
  //   this.httpService.warehousesAllGet().subscribe(
  //     (data: ReceivedListItem[]) => {
  //       this.myWH = data;
  //     }
  //   );
  // }

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

  getElement(): void {
    this.httpService.elementsAllGet().subscribe(
      (data: ReceivedListItem[]) => {
        this.myElement = data;
      }
    );
  }

  removeZone(item): void {
    this.httpService.removeZoneDelete(this.myZone[this.myZone.indexOf(item)].id).subscribe(
      res => {
        this.openSnackBar('Delete is success!', 'Ok');
      }, error => this.openSnackBar(`Something went wrong!\nStatus: ${error}`, 'Cancel'));
  }

  removeShelf(item): void {
    this.httpService.removeShelfsDelete(this.myShelf[this.myShelf.indexOf(item)].id).subscribe(
      res => {
      this.openSnackBar('Delete is success!', 'Ok');
    }, error => this.openSnackBar(`Something went wrong!\nStatus: ${error}`, 'Cancel'));
  }

  removeElement(item): void {
    this.httpService.removeElementsDelete(this.myElement[this.myElement.indexOf(item)].id).subscribe(
      res => {
        this.openSnackBar('Delete is success!', 'Ok');
      }, error => this.openSnackBar(`Something went wrong!\nStatus: ${error}`, 'Cancel'));
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
