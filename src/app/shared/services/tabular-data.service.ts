import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabularDataService {
  constructor(private http: HttpClient) {}

  tabulardata = new EventEmitter();

  // getAll(): any {
  //   let url = 'http://localhost:9090/userDetails/getAllUsers';
  //   let data = this.http.get<any>(url);
  //   this.tabulardata.next(data);
  //   return data;
  // }

  // getAllToEvent(submi) {
  // let url = 'http://localhost:9090/userDetails/getAllUsers';
  // let data = this.http.get<any>(url).subscribe();
  //   this.tabulardata.next(data);
  // }
}
