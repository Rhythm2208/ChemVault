import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Router, RouterModule } from '@angular/router';

interface Compound {
  id: number;
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-compound-gallery',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './compound-gallery.html',
  styleUrls: ['./compound-gallery.css']
})

export class CompoundGallery implements OnInit {
  compounds: Compound[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 10;

constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchCompounds(this.currentPage);
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  fetchCompounds(page: number): void {
    const headers = this.getAuthHeaders();

    this.http.get<any>(`http://localhost:9002/compounds?page=${page}`, { headers })
      .pipe(
        catchError(err => {
          console.error('Failed to fetch compounds', err);
          return of({ compounds: [], currentPage: 1, totalPages: 1 });
        })
      )
      .subscribe(data => {
        this.compounds = data.compounds || [];
        this.currentPage = data.currentPage || 1;
        this.totalPages = data.totalPages || 1;
      });
  }

  deleteCompound(id: number): void {
    if (confirm('Are you sure you want to delete this compound?')) {
      const headers = this.getAuthHeaders();

      this.http.delete(`http://localhost:9002/compounds/${id}`, { headers }).subscribe({
        next: () => {
          this.compounds = this.compounds.filter(c => c.id !== id);
        },
        error: (err) => {
          console.error('Delete failed', err);
        }
      });
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.fetchCompounds(this.currentPage + 1);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.fetchCompounds(this.currentPage - 1);
    }
  }
}
