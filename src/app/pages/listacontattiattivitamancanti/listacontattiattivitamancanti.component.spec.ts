import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacontattiattivitamancantiComponent } from './listacontattiattivitamancanti.component';

describe('ListacontattiattivitamancantiComponent', () => {
  let component: ListacontattiattivitamancantiComponent;
  let fixture: ComponentFixture<ListacontattiattivitamancantiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacontattiattivitamancantiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacontattiattivitamancantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
