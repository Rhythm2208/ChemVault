import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule ],
  styleUrls: ['./login.css']
})
export class Login {
  email = '';
  password = '';
  message = '';
  isLoading = false;

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    if (!this.email || !this.password) {
      this.message = 'Email and password are required';
      return;
    }

    this.isLoading = true;
    this.message = '';

    console.log('Login submitted:', this.email, this.password);

    this.http.post(`http://localhost:9898/users/login`, {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        if (res.token) {
          localStorage.setItem('authToken', res.token);
          this.message = 'Login successful';
          this.router.navigate(['/gallery']);
        } else {
          this.message = 'Invalid response from server';
        }
      },
      error: (err) => {
        console.error('Login failed', err);
        this.isLoading = false;
        this.message = 'Failed to login';
      }
    });
  }
}
