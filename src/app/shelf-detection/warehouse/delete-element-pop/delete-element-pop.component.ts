import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WarehouseComponent} from '../warehouse.component';
import {DialogData} from '../../../admin-pop/admin-pop.component';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-delete-element-pop',
  templateUrl: './delete-element-pop.component.html',
  styleUrls: ['./delete-element-pop.component.css']
})
export class DeleteElementPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WarehouseComponent>,
              // tslint:disable-next-line:variable-name
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
