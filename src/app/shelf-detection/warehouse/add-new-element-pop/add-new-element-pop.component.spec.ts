import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewElementPopComponent } from './add-new-element-pop.component';

describe('AddNewElementPopComponent', () => {
  let component: AddNewElementPopComponent;
  let fixture: ComponentFixture<AddNewElementPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewElementPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewElementPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
