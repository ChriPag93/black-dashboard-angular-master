import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoemailComponent } from './graficoemail.component';

describe('GraficoemailComponent', () => {
  let component: GraficoemailComponent;
  let fixture: ComponentFixture<GraficoemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
