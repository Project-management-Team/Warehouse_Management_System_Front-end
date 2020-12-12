import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {
  invoiceValue = '';
  qtyValue = '';

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

}
