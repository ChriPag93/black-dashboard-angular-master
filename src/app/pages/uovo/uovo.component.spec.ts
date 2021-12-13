import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UovoComponent } from './uovo.component';

describe('UovoComponent', () => {
  let component: UovoComponent;
  let fixture: ComponentFixture<UovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
