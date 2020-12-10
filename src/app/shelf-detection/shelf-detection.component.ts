import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelf-detection',
  templateUrl: './shelf-detection.component.html',
  styleUrls: ['./shelf-detection.component.css']
})
export class ShelfDetectionComponent implements OnInit {
  shelfNameValue = '';
  zoneValue = '';
  sizeValue = '';
  shelfFlag = false;

  constructor() { }

  ngOnInit(): void {
  }

}
