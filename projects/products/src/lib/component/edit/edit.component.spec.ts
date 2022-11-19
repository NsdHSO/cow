import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  DialogPosition,
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import {
  DialogData,
  EditComponent
} from './edit.component';

describe('EditComponent', () => {
  const model : DialogData = {
    data: {},
    trigger: {
      nativeElement: {
        getBoundingClientRect: () => {return {left: 22};}
      }
    }
  };
  const dialogRef : any = {
    updateSize(width? : string, height? : string) : any {
    },
    updatePosition(position? : DialogPosition) : any {},
    close: () => {}
  };
  let component : EditComponent;
  let fixture : ComponentFixture<EditComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: dialogRef
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: model
        }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    let closeSpy = spyOn(dialogRef, 'close');
    component.onNoClick();
    expect(closeSpy)
      .toHaveBeenCalled();
  });
  it('should set another value', () => {
    component.product = {name: 'Mihai'};
    component.changeValue('sami', 'name');
    expect(component.product)
      .toEqual({name: 'sami'});
  });
});
