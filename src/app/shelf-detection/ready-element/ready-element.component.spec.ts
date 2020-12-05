import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyElementComponent } from './ready-element.component';

describe('ReadyElementComponent', () => {
  let component: ReadyElementComponent;
  let fixture: ComponentFixture<ReadyElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadyElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
