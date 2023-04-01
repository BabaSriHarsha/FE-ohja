import { TabularDataService } from './../shared/services/tabular-data.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DetailsSubmissionService } from '../shared/services/details-submission.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  employeeFrom!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private details: DetailsSubmissionService
  ) {
    this.createForm();
  }

  createForm() {
    this.employeeFrom = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
      skills: [''],
      hobbies: [''],
    });
  }

  employee: any = [];
  onSubmit() {
    this.details
      .submitEmployeeDetails(this.employeeFrom.value)
      .subscribe((data: any) => {
        this.employee.push(data);
      });
  }

  ngOnInit(): void {}
}
