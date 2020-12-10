import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  dataFlag = false;

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage($event: string): void {
    if ($event.valueOf() === 'done') {
      this.dataFlag = true;
    }
  }
}
