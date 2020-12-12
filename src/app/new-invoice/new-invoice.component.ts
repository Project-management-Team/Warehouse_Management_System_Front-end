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
  invoiceValue = '';
  qtyValue = [];
  invoiceForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  myItems: ReceivedItems[];
  myFlag = true;
  message = [];
  clearData = false;
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

  check(msg): void {
    if (msg !== '') {
      this.myFlag = false;
    }
  }

  receiveMessage($event): void {
    this.message.push($event);
    this.clearData = false;
  }

  sendData(): void {
    // this.invoiceValue;
    // this.invoiceValue;
  }

  refreshData(): void {
    this.clearData = true;
  }
}
