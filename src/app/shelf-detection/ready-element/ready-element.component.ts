import {Component, Input, OnInit} from '@angular/core';
import {SingleElement} from '../../data-templates/SingleElement';
import {HttpService} from '../../http.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {AdminPopComponent} from '../../admin-pop/admin-pop.component';
import {AddBtnPopComponent} from './add-btn-pop/add-btn-pop.component';
import {MoveBtnPopComponent} from './move-btn-pop/move-btn-pop.component';

@Component({
  selector: 'app-ready-element',
  templateUrl: './ready-element.component.html',
  styleUrls: ['./ready-element.component.css']
})
export class ReadyElementComponent implements OnInit {

  @Input() childElement: SingleElement;
  serialNo: string;
  description: string;
  free = true;
  myEl = {
    id: 0,
    name: '',
    whlockerId: 0,
    itemId: 0,
    status: 0,
    row: 0,
    column: 0,
    item: {
      id: 0,
      serialNumber: '',
      description: '',
      status: 0,
      truckCells: [
        {
          id: 0,
          truckId: 0,
          itemId: 0,
          column: 0,
          row: 0,
          truck: {
            id: 0,
            number: '',
            width: 0,
            height: 0,
            truckCells: [
              null
            ]
          }
        }
      ],
      whcells: [
        null
      ]
    }
  };
  // tslint:disable-next-line:variable-name
  constructor(private httpService: HttpService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.myEl = this.childElement;
    console.log(this.myEl);
    if (this.myEl.item !== null) {
      this.free = false;
      this.serialNo = 'Serial No:' + this.myEl.item.serialNumber;
      this.description = 'Description:' + this.myEl.item.description;
    } else {
      this.serialNo = 'empty';
    }
  }

  addBtn(): void {
    // this.httpService.addBtnPost(this.myEl.id, this.myEl.itemId).subscribe(
    //   res => {
    //     this.openSnackBar('Adding is success!', 'Ok');
    //   }, error => this.openSnackBar(`Something went wrong!\nStatus: ${error}`, 'Cancel'));
    const dialogRef = this.dialog.open(AddBtnPopComponent, {
      width: '50vw',
      height: '50vh',
      data: {id: this.myEl.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.myEl = this.childElement;
      console.log(this.myEl);
      if (this.myEl.item !== null) {
        this.free = false;
        this.serialNo = 'Serial No:' + this.myEl.item.serialNumber;
        this.description = 'Description:' + this.myEl.item.description;
      } else {
        this.serialNo = 'empty';
      }
    });
  }

  bookBtn(): void {
    this.httpService.bookBtnPost(this.myEl.id).subscribe(
      res => {
        this.openSnackBar('Booking is success!', 'Ok');
      }, error => this.openSnackBar(`Something went wrong!\nStatus: ${error}`, 'Cancel'));
  }

  moveBtn(): void {
    // this.httpService.moveBtnPost(this.myEl.id, this.myEl.itemId).subscribe(
    //   res => {
    //     this.openSnackBar('Moving is success!', 'Ok');
    //   }, error => this.openSnackBar(`Something went wrong!\nStatus: ${error}`, 'Cancel'));
    // this.httpService.addBtnPost(this.myEl.id, this.myEl.itemId).subscribe(
    //   res => {
    //     this.openSnackBar('Adding is success!', 'Ok');
    //   }, error => this.openSnackBar(`Something went wrong!\nStatus: ${error}`, 'Cancel'));
    const dialogRef = this.dialog.open(MoveBtnPopComponent, {
      width: '50vw',
      height: '50vh',
      data: {id: this.myEl.itemId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.myEl = this.childElement;
      console.log(this.myEl);
      if (this.myEl.item !== null) {
        this.free = false;
        this.serialNo = 'Serial No:' + this.myEl.item.serialNumber;
        this.description = 'Description:' + this.myEl.item.description;
      } else {
        this.serialNo = 'empty';
      }
    });
  }

  scrapBtn(): void {
    this.httpService.scrapBtnPost(this.myEl.itemId).subscribe(
      res => {
        this.openSnackBar('Scraping is success!', 'Ok');
      }, error => this.openSnackBar(`Something went wrong!\nStatus: ${error}`, 'Cancel'));
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
