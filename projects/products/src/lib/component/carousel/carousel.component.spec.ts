import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {ProductImage} from '../../product.model';
import {CarouselComponent} from './carousel.component';

describe('CarouselComponent', () => {
  let component : CarouselComponent;
  let fixture : ComponentFixture<CarouselComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
  it('should do nothing', () => {
    component.images = [];
    component.triggerArrow({key: false})
    expect(component.index).toEqual(0)
  });

  it('should do move index with one', () => {
    component.images = [{} as ProductImage, {} as ProductImage];
    component.triggerArrow({key: false})
    expect(component.index).toEqual(1)
  });
});
