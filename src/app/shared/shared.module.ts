import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
const material = [
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...material,
  ],
  exports: [LoginComponent, ...material],
})
export class SharedModule {}
