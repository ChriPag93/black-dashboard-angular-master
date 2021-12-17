import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Utility1Component } from './utility1.component';

describe('Utility1Component', () => {
  let component: Utility1Component;
  let fixture: ComponentFixture<Utility1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Utility1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Utility1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
