import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C15CComponent } from './c15-c.component';

describe('C15CComponent', () => {
  let component: C15CComponent;
  let fixture: ComponentFixture<C15CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C15CComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C15CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
