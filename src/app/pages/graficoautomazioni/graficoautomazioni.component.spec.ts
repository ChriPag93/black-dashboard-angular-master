import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoautomazioniComponent } from './graficoautomazioni.component';

describe('GraficoautomazioniComponent', () => {
  let component: GraficoautomazioniComponent;
  let fixture: ComponentFixture<GraficoautomazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoautomazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoautomazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
