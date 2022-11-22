import {HttpClientTestingModule} from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {environment} from '../../../../src/environments/environment';
import {ProductsComponent} from './products.component';
import {ProductsService} from './products.service';

fdescribe('ProductsComponent', () => {
  let component : ProductsComponent;
  let fixture : ComponentFixture<ProductsComponent>;
  let productService = jasmine.createSpyObj('ProductsService', ['addNewProduct']);
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
          useValue: productService
        },
        {
          provide: 'env',
          useValue: environment
        }
      ]
    })
      .compileComponents();
    productService = TestBed.inject(ProductsService) as jasmine.SpyObj<ProductsService>;
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
  it('should add new product', () => {
    productService.addNewProduct = jasmine.createSpy().and.returnValue({})

    component.addNewProduct();
    expect(productService.addNewProduct).toHaveBeenCalled()
  });
});
