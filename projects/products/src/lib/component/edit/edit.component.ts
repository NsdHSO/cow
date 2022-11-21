import {
  AfterViewInit,
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {
  MAT_DIALOG_DATA,
  MatDialogConfig,
  MatDialogRef
} from '@angular/material/dialog';
import {Product} from '../../product.model';

export class DialogData {
  data : any;
  trigger : any;
}

@Component({
  selector: 'lib-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public triggerElementRef : any;
  public product : any;
  private _keys : any;
  public get keys() : string[] {
    return this._keys;
  }

  public set keys(value : string[]) {
    this._keys = value;
  }

  constructor(
    public dialogRef : MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data : DialogData
  ) {
    this.triggerElementRef = data.trigger;
    this.product = data.data;
  }

  onNoClick() : void {
    this.dialogRef.close();
  }

  ngOnInit() : void {
    const matDialogConfig = new MatDialogConfig();
    const rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
    matDialogConfig.position = {
      left: `${rect.left}px`,
      top: `${rect.bottom}px`
    };
    matDialogConfig.width = 'max-content';
    this.dialogRef.updateSize(matDialogConfig.width);
    this.dialogRef.updatePosition(matDialogConfig.position);
    this._keys = this.getAllKeys(this.product);

  }

  public changeValue(event : any , property : any) : void {
    console.log(this.product)

    if(event instanceof MatCheckboxChange){
      this.product[property] = event.checked;
    }else {
      this.product[property] = event;
    }
  }

  private getAllKeys(product : Product) : string[] {
    return Object.keys(product).filter(key => key !== 'id');
  }
}
