import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatigeneralicontattoComponent } from './datigeneralicontatto.component';

describe('DatigeneralicontattoComponent', () => {
  let component: DatigeneralicontattoComponent;
  let fixture: ComponentFixture<DatigeneralicontattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatigeneralicontattoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatigeneralicontattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
