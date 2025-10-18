import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompoundGallery } from './add-compound-gallery';

describe('AddCompoundGallery', () => {
  let component: AddCompoundGallery;
  let fixture: ComponentFixture<AddCompoundGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCompoundGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCompoundGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
