import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C15detailsComponent } from './c15details.component';

describe('C15detailsComponent', () => {
  let component: C15detailsComponent;
  let fixture: ComponentFixture<C15detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C15detailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C15detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
