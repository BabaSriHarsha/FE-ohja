import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { TabularDataService } from './tabular-data.service';

@Injectable({
  providedIn: 'root',
})
export class DetailsSubmissionService {
  constructor(private http: HttpClient) {}

  tabulardata = new EventEmitter();

  submitEmployeeDetails(value: any): any {
    console.log(`service`, value);
    let url = 'http://localhost:9090/userDetails/addUserDetails';
    return this.http.post<any>(url, value);
  }
}
