import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitabilityClockComponent } from './profitability-clock.component';

describe('ProfitabilityClockComponent', () => {
  let component: ProfitabilityClockComponent;
  let fixture: ComponentFixture<ProfitabilityClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitabilityClockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfitabilityClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
