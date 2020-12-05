import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitElementComponent } from './wait-element.component';

describe('WaitElementComponent', () => {
  let component: WaitElementComponent;
  let fixture: ComponentFixture<WaitElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
