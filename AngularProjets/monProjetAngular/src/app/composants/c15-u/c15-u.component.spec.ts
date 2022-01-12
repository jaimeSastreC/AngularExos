import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C15UComponent } from './c15-u.component';

describe('C15UComponent', () => {
  let component: C15UComponent;
  let fixture: ComponentFixture<C15UComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C15UComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C15UComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
