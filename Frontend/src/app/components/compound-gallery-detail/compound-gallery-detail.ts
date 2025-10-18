import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compound-gallery-detail',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './compound-gallery-detail.html',
  styleUrls: ['./compound-gallery-detail.css']
})
export class CompoundGalleryDetail implements OnInit {
  compoundId!: number;
  compoundData: any = {
    name: '',
    image: '',
    description: ''
  };
  isLoading = false;
  message = '';


  ngOnInit(): void {
    this.compoundId = Number(this.route.snapshot.paramMap.get('id'));

    this.fetchCompound();
  }
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
  fetchCompound() {
    const headers = this.getAuthHeaders();

    this.isLoading = true;
    this.http.get<any>(`http://localhost:9002/compounds/${this.compoundId}`, { headers })
      .pipe(
        catchError(err => {
          console.error('Failed to fetch compound', err);
          this.isLoading = false;
          return of(null);
        })
      )
      .subscribe(data => {
        if (data) {
          this.compoundData = data;
        }
        this.isLoading = false;
      });
  }

  updateCompound() {
    this.isLoading = true;
    const headers = this.getAuthHeaders();

    this.http.put<any>(`http://localhost:9002/compounds/${this.compoundId}`, this.compoundData, { headers })
      .pipe(
        catchError(err => {
          console.error('Failed to update compound', err);
          this.isLoading = false;
          this.message = 'Update failed';
          return of(null);
        })
      )
      .subscribe(response => {
        if (response) {
          this.message = 'Compound updated successfully!';
        }
        this.isLoading = false;
      });
  }
}
