import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WarehouseComponent} from '../warehouse.component';
import {DialogData} from '../../../admin-pop/admin-pop.component';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-new-element-pop',
  templateUrl: './add-new-element-pop.component.html',
  styleUrls: ['./add-new-element-pop.component.css']
})
export class AddNewElementPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WarehouseComponent>,
              // tslint:disable-next-line:variable-name
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
