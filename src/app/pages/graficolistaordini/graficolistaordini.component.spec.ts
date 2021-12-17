import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficolistaordiniComponent } from './graficolistaordini.component';

describe('GraficolistaordiniComponent', () => {
  let component: GraficolistaordiniComponent;
  let fixture: ComponentFixture<GraficolistaordiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficolistaordiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficolistaordiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
