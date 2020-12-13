import { Component, OnInit } from '@angular/core';
import {ReceivedItems} from '../data-templates/received-data/ReceivedItems';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  dataFlag = false;
  receivedItems: ReceivedItems[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.receivedItems.push({id: 0, serialNumber: '', description: '', status: 0, truckCells: null, whcells: null});
  }

  receiveMessage($event: ReceivedItems[]): void {
    console.log('received method!', $event);
    // console.log('received items', this.receivedItems);
    if ($event.length !== 0) {
      $event.forEach(item => this.receivedItems.push(item));
      // this.dataFlag = true;
    }
  }
}
