import {Component, OnInit} from '@angular/core';
import {SingleShelf} from '../data-templates/SingleShelf';
@Component({
  selector: 'app-shelf-detection',
  templateUrl: './shelf-detection.component.html',
  styleUrls: ['./shelf-detection.component.css'],
})
export class ShelfDetectionComponent implements OnInit {
  shelfFlag = false;
  shelf: SingleShelf;
  myZone = sessionStorage.getItem('whID');
  constructor() { }

  ngOnInit(): void {}

  receiveMessage($event): void {
    this.shelfFlag = true;
    this.shelf = $event;
  }
}
