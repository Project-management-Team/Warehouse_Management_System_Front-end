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
    MatChipsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
