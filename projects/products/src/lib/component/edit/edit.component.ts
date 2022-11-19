import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

class DialogData {
  data : any;
}

@Component({
  selector: 'lib-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor(
    public dialogRef : MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data : DialogData
  ) {}

  onNoClick() : void {
    this.dialogRef.close();
  }

  ngOnInit() : void {
  }
}
