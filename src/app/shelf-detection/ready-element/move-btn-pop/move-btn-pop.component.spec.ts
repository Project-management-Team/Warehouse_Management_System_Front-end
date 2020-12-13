import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveBtnPopComponent } from './move-btn-pop.component';

describe('MoveBtnPopComponent', () => {
  let component: MoveBtnPopComponent;
  let fixture: ComponentFixture<MoveBtnPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveBtnPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveBtnPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
