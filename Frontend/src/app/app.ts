import { Component, signal } from '@angular/core';
import { CompoundGallery } from './components/compound-gallery/compound-gallery';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompoundGalleryDetail } from './components/compound-gallery-detail/compound-gallery-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
 
})
export class App {
  title = 'Chem Vault';
}


