import {HttpClientTestingModule} from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {environment} from '../../../../../../src/environments/environment';
import {ProductsService} from '../../products.service';
import {RantingComponent} from './ranting.component';

describe('RantingComponent', () => {
  let component : RantingComponent;
  let fixture : ComponentFixture<RantingComponent>;
  let productServiceSpy = jasmine.createSpyObj('ProductsService', ['updateProduct']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RantingComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'env',
          useValue: environment
        },
        {
          provider: ProductsService,
          useValue: productServiceSpy
        }
      ]
    })
      .compileComponents();
    productServiceSpy = TestBed.inject(ProductsService) as jasmine.SpyObj<ProductsService>;
    fixture = TestBed.createComponent(RantingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
  it('should product updated', () => {
    component.product = {id: 2};
    productServiceSpy.updateProduct = jasmine.createSpy()
      .and
      .returnValue({});
    component.updateRanting({});
    expect(productServiceSpy.updateProduct)
      .toHaveBeenCalled();
  });
  it('should change ranting', () => {
    component.product = {id: 2};
    component.changeRanting(3);
    expect(component.product.ranting)
      .toEqual(4);
  });
  it('should clone product', () => {
    component.cloneProduct = {};
    component.product = {name:'jhon'};
    component.mouseLeave();
    expect(component.cloneProduct)
      .toEqual(component.product);
  });

  it('should increment ranting from clone', () => {
    component.cloneProduct = {};
    component.enterMouse(2);
    expect(component.cloneProduct.ranting)
      .toEqual(3);
  });
});
