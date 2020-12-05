import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfDetectionComponent } from './shelf-detection.component';

describe('ShelfDetectionComponent', () => {
  let component: ShelfDetectionComponent;
  let fixture: ComponentFixture<ShelfDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelfDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
