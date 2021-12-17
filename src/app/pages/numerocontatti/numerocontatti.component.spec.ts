import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerocontattiComponent } from './numerocontatti.component';

describe('NumerocontattiComponent', () => {
  let component: NumerocontattiComponent;
  let fixture: ComponentFixture<NumerocontattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerocontattiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerocontattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
