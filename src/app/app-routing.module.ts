import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {AuthorizationComponent} from './authorization/authorization.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '', component: AuthorizationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
