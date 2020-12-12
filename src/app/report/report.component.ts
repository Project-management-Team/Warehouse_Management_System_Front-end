import { Component, OnInit } from '@angular/core';
import {ReceivedItems} from '../data-templates/received-data/ReceivedItems';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  dataFlag = false;
  receivedItems: ReceivedItems[];

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage($event: ReceivedItems[]): void {
    if ($event.length !== 0) {
      this.receivedItems = $event;
      this.dataFlag = true;
    }
  }
}
