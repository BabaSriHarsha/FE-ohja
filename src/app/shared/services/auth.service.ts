import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  userExsists!: any;
  constructor(private http: HttpClient, private router: Router) {}

  checkUser(user: User): Observable<any> {
    console.log('user', user);
    let url = `http://localhost:9090/users/getUser/?username=${user.username}`;
    return this.http.get<any>(url);
  }

  login(value: any) {
    this.checkUser(value).subscribe((data: any) => {
      if (data) {
        this.userExsists = true;
      } else {
        this.userExsists = false;
      }
    });
    if (this.userExsists) {
      this.isAuthenticated = true;
      this.router.navigate(['/d']);
    }
  }

  logout() {
    this.router.navigate(['']);
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
