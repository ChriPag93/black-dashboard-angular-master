import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroacquistiComponent } from './numeroacquisti.component';

describe('NumeroacquistiComponent', () => {
  let component: NumeroacquistiComponent;
  let fixture: ComponentFixture<NumeroacquistiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeroacquistiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroacquistiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
