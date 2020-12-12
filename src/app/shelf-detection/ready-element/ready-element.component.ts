import {Component, Input, OnInit} from '@angular/core';
import {SingleElement} from '../../data-templates/SingleElement';

@Component({
  selector: 'app-ready-element',
  templateUrl: './ready-element.component.html',
  styleUrls: ['./ready-element.component.css']
})
export class ReadyElementComponent implements OnInit {

  @Input() childElement: SingleElement;
  serialNo: string;
  description: string;
  free = true;
  myEl = {
    id: 0,
    name: '',
    whlockerId: 0,
    itemId: 0,
    status: 0,
    row: 0,
    column: 0,
    item: {
      id: 0,
      serialNumber: '',
      description: '',
      status: 0,
      truckCells: [
        {
          id: 0,
          truckId: 0,
          itemId: 0,
          column: 0,
          row: 0,
          truck: {
            id: 0,
            number: '',
            width: 0,
            height: 0,
            truckCells: [
              null
            ]
          }
        }
      ],
      whcells: [
        null
      ]
    }
  };
  constructor() { }

  ngOnInit(): void {
    this.myEl = this.childElement;
    console.log(this.myEl);
    if (this.myEl.item !== null) {
      this.free = false;
      this.serialNo = 'Serial No:' + this.myEl.item.serialNumber;
      this.description = 'Description:' + this.myEl.item.description;
    } else {
      this.serialNo = 'empty';
    }
  }

}
