import {HttpClientTestingModule} from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {MatDialogModule} from '@angular/material/dialog';
import {of} from 'rxjs';
import {environment} from '../../../../../../src/environments/environment';
import {ProductsService} from '../../products.service';
import {PostComponent} from './post.component';
import createSpyObj = jasmine.createSpyObj;

fdescribe('PostComponent', () => {
  let component : PostComponent;
  let fixture : ComponentFixture<PostComponent>;
  const spyProductService = createSpyObj('ProductsService', {
    updateProduct: of({})
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [MatDialogModule, HttpClientTestingModule],
      providers: [

        {
          provide: 'env',
          useValue: environment
        }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    createSpyObj('ProductsService', {
      updateProduct: of({})
    });
    expect(component)
      .toBeTruthy();
  });
});
