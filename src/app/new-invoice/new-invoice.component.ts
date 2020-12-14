import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ReceivedItems} from '../data-templates/received-data/ReceivedItems';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {
  invoiceValue = 'initial';
  qtyValue = [];
  invoiceForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  myItems: ReceivedItems[];
  myFlag = true;
  message = [];
  clearData = false;
  myTruckCells = [];
  // tslint:disable-next-line:variable-name
  constructor(private httpService: HttpService, private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.qtyValue = ['', '', '', '', '', '', '', '', ''];
    setTimeout(() => {
      HTMLElement.prototype.click();
    }, 1);
    this.httpService.invoiceItemsGet(sessionStorage.getItem('whID')).subscribe(
      (data: ReceivedItems[]) => {
        this.myItems = data;
        console.log(this.myItems);
      }, error => console.log(error)
    );
  }

  check(msg, event): void {
    if (msg !== '') {
      this.myFlag = false;
    }
    this.invoiceValue = event.target.value;
  }

  receiveMessage($event): void {
    this.message.push($event);
    this.myTruckCells.push(
      {
      itemId: $event, // null if item non selected
      column: 0,
      row: 0
      }
    );
    this.clearData = false;
  }

  sendData(msg): void {
    // this.invoiceValue;
    // this.invoiceValue;
    // console.log('AAAAA');
    console.log('invoice value', this.invoiceValue);
    this.httpService.truckPost(msg, this.myTruckCells).subscribe(
      res => this.openSnackBar('Sending is success!', 'Ok'), error => this.openSnackBar('Some troubles!', 'Cancel')
    );
  }

  refreshData(): void {
    // this.myTruckCells = [];
    // this.ngOnInit();
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
