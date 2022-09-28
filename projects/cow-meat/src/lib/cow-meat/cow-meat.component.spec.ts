import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowMeatComponent } from './cow-meat.component';

describe('CowMeatComponent', () => {
  let component: CowMeatComponent;
  let fixture: ComponentFixture<CowMeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CowMeatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CowMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
