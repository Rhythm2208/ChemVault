import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundGalleryDetail } from './compound-gallery-detail';

describe('CompoundGalleryDetail', () => {
  let component: CompoundGalleryDetail;
  let fixture: ComponentFixture<CompoundGalleryDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoundGalleryDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoundGalleryDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
