import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-compound-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-compound-gallery.html',
  styleUrls: ['./add-compound-gallery.css']
})
export class AddCompoundGallery {
  compoundData = {
    name: '',
    image: '',
    description: ''
  };
  isLoading = false;
  message = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
  createCompound() {
    const headers = this.getAuthHeaders();

    if (!this.compoundData.name || !this.compoundData.image || !this.compoundData.description) {
      alert('Please fill out all fields.');
      return;
    }

    this.isLoading = true;
    this.http.post(`http://localhost:9002/compounds`, this.compoundData, { headers }).subscribe({
      next: (res) => {
        console.log('Compound created:', res);
        this.isLoading = false;
        this.message = 'Compound created successfully ';
      },
      error: (err) => {
        console.error('Create failed', err);
        this.isLoading = false;
        this.message = 'Failed to create compound ';
      }
    });
  }
}
