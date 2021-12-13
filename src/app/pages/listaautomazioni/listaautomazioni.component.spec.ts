import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaautomazioniComponent } from './listaautomazioni.component';

describe('ListaautomazioniComponent', () => {
  let component: ListaautomazioniComponent;
  let fixture: ComponentFixture<ListaautomazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaautomazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaautomazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
