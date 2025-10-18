import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule 
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  email = '';
  password = '';
  message = '';
  isLoading = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (!this.email || !this.password) {
      this.message = 'Email and password are required';
      return;
    }

    this.isLoading = true;
    this.message = '';

    console.log('signup submitted:', this.email, this.password);

    this.http.post(`http://localhost:9002/users/signup`, {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        if (res.user) {
          this.message = 'Signup successful kindly relogin';
        } else {
          this.message = 'Invalid response from server';
        }
      },
      error: (err) => {
        console.error('Signup failed', err.error.message);
        this.isLoading = false;
        this.message = err.error.message;
      }
    });
  }
}
