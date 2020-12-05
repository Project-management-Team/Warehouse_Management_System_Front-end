import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Element {
  name: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  elements: Element[] = [
    {name: 'Element 1'},
    {name: 'Element 2'},
    {name: 'Element 3'},
  ];

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

}
