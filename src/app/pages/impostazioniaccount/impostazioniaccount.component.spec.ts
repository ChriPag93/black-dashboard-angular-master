import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpostazioniaccountComponent } from './impostazioniaccount.component';

describe('ImpostazioniaccountComponent', () => {
  let component: ImpostazioniaccountComponent;
  let fixture: ComponentFixture<ImpostazioniaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpostazioniaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpostazioniaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
