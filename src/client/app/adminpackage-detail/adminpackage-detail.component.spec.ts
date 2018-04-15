import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpackageDetailComponent } from './adminpackage-detail.component';

describe('AdminpackageDetailComponent', () => {
  let component: AdminpackageDetailComponent;
  let fixture: ComponentFixture<AdminpackageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpackageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpackageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
