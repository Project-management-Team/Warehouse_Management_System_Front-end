import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ReceivedItems} from '../data-templates/received-data/ReceivedItems';

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
  constructor(private httpService: HttpService, private _formBuilder: FormBuilder) {
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
      res => console.log(res), error => console.log(error)
    );
  }

  refreshData(): void {
    // this.myTruckCells = [];
    // this.ngOnInit();
  }
}
