import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttivitacontattoComponent } from './attivitacontatto.component';

describe('AttivitacontattoComponent', () => {
  let component: AttivitacontattoComponent;
  let fixture: ComponentFixture<AttivitacontattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttivitacontattoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttivitacontattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
