import { TabularDataService } from './../shared/services/tabular-data.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DetailsSubmissionService } from '../shared/services/details-submission.service';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  employeeFrom!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private details: DetailsSubmissionService,
    private sanitizer: DomSanitizer
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

  selectedFile: any = null;
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    let url = this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(this.selectedFile)
    );
    console.log(this.selectedFile);
  }

  employee: any = [];
  message: any;
  onSubmit() {
    let res = JSON.stringify(this.employeeFrom.value);
    this.details
      .uploadFile(this.selectedFile)
      .subscribe((data: any) => console.log(`err`, data));
    this.details.submitEmployeeDetails(res).subscribe((data: any) => {
      console.log(`data.error`, data.error.text);
    });
  }

  ngOnInit(): void {}
}
