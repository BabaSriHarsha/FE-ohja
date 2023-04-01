import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PersonTableComponent } from './person-table/person-table.component';

@NgModule({
  declarations: [AppComponent, EmployeeDetailsComponent, PersonTableComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
