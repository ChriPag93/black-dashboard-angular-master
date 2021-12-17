import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoordiniComponent } from './graficoordini.component';

describe('GraficoordiniComponent', () => {
  let component: GraficoordiniComponent;
  let fixture: ComponentFixture<GraficoordiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoordiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoordiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
