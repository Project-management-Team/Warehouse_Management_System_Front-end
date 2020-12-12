import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteElementPopComponent } from './delete-element-pop.component';

describe('DeleteElementPopComponent', () => {
  let component: DeleteElementPopComponent;
  let fixture: ComponentFixture<DeleteElementPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteElementPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteElementPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
