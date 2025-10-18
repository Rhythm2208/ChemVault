import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoundGallery } from './components/compound-gallery/compound-gallery';
import { CompoundGalleryDetail } from './components/compound-gallery-detail/compound-gallery-detail';
import { AddCompoundGallery } from './components/add-compound-gallery/add-compound-gallery';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';

export const routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'gallery', component: CompoundGallery },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'gallery/create', component: AddCompoundGallery },
  {
    path: 'gallery/:id',
    component: CompoundGalleryDetail,
    data: { renderMode: 'client' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes as any)],
  exports: [RouterModule]
})
export class AppRoutingModule { }