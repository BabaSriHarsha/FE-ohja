import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { TabularDataService } from './tabular-data.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsSubmissionService {
  constructor(private http: HttpClient) {}

  tabulardata = new EventEmitter();

  submitEmployeeDetails(value: any): any {
    console.log(`service`, value);
    let url = 'http://localhost:9090/userDetails/addUserDetails';
    return this.http.post<any>(
      url,
      { responseType: 'text' },
      JSON.parse(value)
    );
  }

  uploadFile(file: any): any {
    const formData = new FormData();
    console.log(`formdata`, formData);
    formData.append('file', file);
    let url = 'http://localhost:9090/image/fileSystem';
    return this.http.post(url, formData);
  }
}
