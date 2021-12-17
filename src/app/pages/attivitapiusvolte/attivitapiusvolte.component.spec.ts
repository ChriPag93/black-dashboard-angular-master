import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttivitapiusvolteComponent } from './attivitapiusvolte.component';

describe('AttivitapiusvolteComponent', () => {
  let component: AttivitapiusvolteComponent;
  let fixture: ComponentFixture<AttivitapiusvolteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttivitapiusvolteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttivitapiusvolteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
