import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilocontattoComponent } from './profilocontatto.component';

describe('ProfilocontattoComponent', () => {
  let component: ProfilocontattoComponent;
  let fixture: ComponentFixture<ProfilocontattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilocontattoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilocontattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
