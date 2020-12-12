import {Component, Input, OnInit} from '@angular/core';
import {ReceivedItems} from '../../data-templates/received-data/ReceivedItems';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  @Input() receivedItems: ReceivedItems[];
  constructor() { }

  ngOnInit(): void {
  }

}
