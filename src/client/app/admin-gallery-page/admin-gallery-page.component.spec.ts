import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGalleryPageComponent } from './admin-gallery-page.component';

describe('AdminGalleryPageComponent', () => {
  let component: AdminGalleryPageComponent;
  let fixture: ComponentFixture<AdminGalleryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGalleryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
