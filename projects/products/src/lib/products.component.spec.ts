import {HttpClientTestingModule} from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {environment} from '../../../../src/environments/environment';
import {ProductsComponent} from './products.component';
import {ProductsService} from './products.service';

describe('ProductsComponent', () => {
  let component : ProductsComponent;
  let fixture : ComponentFixture<ProductsComponent>;
  let productServiceSpy = jasmine.createSpyObj('ProductsService', ['addNewProduct']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {
          provider: ProductsService,
          useValue: productServiceSpy
        },
        {
          provide: 'env',
          useValue: environment
        }
      ]
    })
      .compileComponents();
    productServiceSpy = TestBed.inject(ProductsService) as jasmine.SpyObj<ProductsService>;
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
  it('should add new product', () => {
    productServiceSpy.addNewProduct = jasmine.createSpy().and.returnValue({})

    component.addNewProduct();
    expect(productServiceSpy.addNewProduct).toHaveBeenCalled()
  });
});
