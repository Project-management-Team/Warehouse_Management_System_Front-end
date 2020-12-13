import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBtnPopComponent } from './add-btn-pop.component';

describe('AddBtnPopComponent', () => {
  let component: AddBtnPopComponent;
  let fixture: ComponentFixture<AddBtnPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBtnPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBtnPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
