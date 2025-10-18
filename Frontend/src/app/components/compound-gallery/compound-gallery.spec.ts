import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundGallery } from './compound-gallery';

describe('CompoundGallery', () => {
  let component: CompoundGallery;
  let fixture: ComponentFixture<CompoundGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoundGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoundGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
