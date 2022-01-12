import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C15DComponent } from './c15-d.component';

describe('C15DComponent', () => {
  let component: C15DComponent;
  let fixture: ComponentFixture<C15DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C15DComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C15DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
