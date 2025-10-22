
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

import { CompoundGalleryDetail } from './compound-gallery-detail';

describe('CompoundGalleryDetail', () => {
  let component: CompoundGalleryDetail;
  let fixture: ComponentFixture<CompoundGalleryDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,         
        CompoundGalleryDetail       
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' }),                               
            queryParams: of({}),                                    
            snapshot: { paramMap: convertToParamMap({ id: '1' }) }   
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CompoundGalleryDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
