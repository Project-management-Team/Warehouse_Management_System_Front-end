import {Component, Input, OnInit, Output} from '@angular/core';
import {ReceivedItems} from '../../data-templates/received-data/ReceivedItems';
import {EventEmitter} from '@angular/core';

interface Elements {
  value: string;
}

@Component({
  selector: 'app-new-element',
  templateUrl: './new-element.component.html',
  styleUrls: ['./new-element.component.css']
})
export class NewElementComponent implements OnInit {
  selectedValue: string;
  elements: Elements[];
  flag = true;
  @Input() myElements: ReceivedItems[];
  @Input() myFlag: boolean;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    if (this.myFlag) {
      this.selectedValue = '';
    }
    this.elements = [
      {value: 'element-0'},
      {value: 'element-1'},
      {value: 'element-2'}
    ];
  }

  sendId(id): void {
    this.messageEvent.emit(id);
  }
}
