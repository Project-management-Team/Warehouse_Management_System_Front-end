import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AuthorizationComponent } from './authorization/authorization.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import {MatDividerModule} from '@angular/material/divider';
import { ElementsComponent } from './new-invoice/elements/elements.component';
import { NewElementComponent } from './new-invoice/new-element/new-element.component';
import { ReportComponent } from './report/report.component';
import { FilterComponent } from './report/filter/filter.component';
import {MatChipsModule} from '@angular/material/chips';
import { DocumentComponent } from './report/document/document.component';
import { ShelfDetectionComponent } from './shelf-detection/shelf-detection.component';
import { WarehouseComponent } from './shelf-detection/warehouse/warehouse.component';
import { ReadyElementComponent } from './shelf-detection/ready-element/ready-element.component';
import { WaitElementComponent } from './shelf-detection/wait-element/wait-element.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatGridListModule} from '@angular/material/grid-list';
import { EmptyElementComponent } from './shelf-detection/empty-element/empty-element.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AdminPopComponent } from './admin-pop/admin-pop.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { ActivityInfoComponent } from './activity-info/activity-info.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {HttpService} from './http.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { AddNewElementPopComponent } from './shelf-detection/warehouse/add-new-element-pop/add-new-element-pop.component';
import { DeleteElementPopComponent } from './shelf-detection/warehouse/delete-element-pop/delete-element-pop.component';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    NewInvoiceComponent,
    ElementsComponent,
    NewElementComponent,
    ReportComponent,
    FilterComponent,
    DocumentComponent,
    ShelfDetectionComponent,
    WarehouseComponent,
    ReadyElementComponent,
    WaitElementComponent,
    EmptyElementComponent,
    AdminPopComponent,
    ActivityInfoComponent,
    AddNewElementPopComponent,
    DeleteElementPopComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatChipsModule,
    MatTreeModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatDialogModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatStepperModule
  ],
  providers: [HttpClient, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
