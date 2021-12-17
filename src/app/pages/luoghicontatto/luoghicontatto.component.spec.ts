import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuoghicontattoComponent } from './luoghicontatto.component';

describe('LuoghicontattoComponent', () => {
  let component: LuoghicontattoComponent;
  let fixture: ComponentFixture<LuoghicontattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuoghicontattoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuoghicontattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
