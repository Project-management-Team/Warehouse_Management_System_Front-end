import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AppComponent} from '../app.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-admin-pop',
  templateUrl: './admin-pop.component.html',
  styleUrls: ['./admin-pop.component.css']
})
export class AdminPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
