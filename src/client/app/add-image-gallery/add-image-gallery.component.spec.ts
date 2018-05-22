import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImageGalleryComponent } from './add-image-gallery.component';

describe('AddImageGalleryComponent', () => {
  let component: AddImageGalleryComponent;
  let fixture: ComponentFixture<AddImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImageGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
