import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C15RComponent } from './c15-r.component';

describe('C15RComponent', () => {
  let component: C15RComponent;
  let fixture: ComponentFixture<C15RComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C15RComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C15RComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
