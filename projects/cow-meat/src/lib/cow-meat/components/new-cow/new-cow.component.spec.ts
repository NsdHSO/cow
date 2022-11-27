import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCowComponent } from './new-cow.component';

describe('NewCowComponent', () => {
  let component: NewCowComponent;
  let fixture: ComponentFixture<NewCowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NewCowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
