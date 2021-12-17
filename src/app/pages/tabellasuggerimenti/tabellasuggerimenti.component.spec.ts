import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellasuggerimentiComponent } from './tabellasuggerimenti.component';

describe('TabellasuggerimentiComponent', () => {
  let component: TabellasuggerimentiComponent;
  let fixture: ComponentFixture<TabellasuggerimentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabellasuggerimentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellasuggerimentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
