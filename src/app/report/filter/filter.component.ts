import {Component, OnInit, Output} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {EventEmitter} from '@angular/core';
import {HttpService} from '../../http.service';
import {ReceivedItems} from '../../data-templates/received-data/ReceivedItems';
import {FormBuilder, FormGroup} from '@angular/forms';

export interface Element {
  name: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selectable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  elements: Element[] = [
    {name: 'Element 1'},
    {name: 'Element 2'},
    {name: 'Element 3'},
  ];
  @Output() messageEvent = new EventEmitter<Array<any>>();
  filterForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  // tslint:disable-next-line:variable-name
  constructor(private httpService: HttpService, private _formBuilder: FormBuilder) {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our elements
    if ((value || '').trim()) {
      this.elements.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(element: Element): void {
    const index = this.elements.indexOf(element);

    if (index >= 0) {
      this.elements.splice(index, 1);
    }
  }

  ngOnInit(): void {
  }

  sendFilter(message): void {
    console.log(message.value);
    this.httpService.warehouseSearchGet(1, message.value).subscribe(
      (data: ReceivedItems[]) => {
        console.log(data);
        this.messageEvent.emit(data);
      });
  }
}
