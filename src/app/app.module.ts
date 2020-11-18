import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CaseListComponent } from './case-list/case-list.component';
import { CaseFormComponent } from './case-form/case-form.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseListComponent,
    CaseFormComponent,
    CaseDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
