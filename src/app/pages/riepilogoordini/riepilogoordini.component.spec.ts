import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiepilogoordiniComponent } from './riepilogoordini.component';

describe('RiepilogoordiniComponent', () => {
  let component: RiepilogoordiniComponent;
  let fixture: ComponentFixture<RiepilogoordiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiepilogoordiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiepilogoordiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
