import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  resetForm() {
    this.loginForm.reset();
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value);
  }
}
