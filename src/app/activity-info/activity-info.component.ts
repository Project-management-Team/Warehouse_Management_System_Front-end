import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AdminPopComponent, DialogData} from '../admin-pop/admin-pop.component';
import {AppComponent} from '../app.component';
import {NewInvoiceComponent} from '../new-invoice/new-invoice.component';
import {ReportComponent} from '../report/report.component';

@Component({
  selector: 'app-activity-info',
  templateUrl: './activity-info.component.html',
  styleUrls: ['./activity-info.component.css']
})
export class ActivityInfoComponent implements OnInit {
  action = '';
  // public dialogRefApp: MatDialogRef<AppComponent>,
  // public dialogRefAdmin: MatDialogRef<AdminPopComponent>,
  // public dialogRefInvoice: MatDialogRef<NewInvoiceComponent>,
  // public dialogRefReport: MatDialogRef<ReportComponent>,
  // @Inject(MAT_DIALOG_DATA) public data: DialogData
  constructor() { }

  ngOnInit(): void {
  }

}
